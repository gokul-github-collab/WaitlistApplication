from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import AllowAny
from .models import Product, Customer
from .serializers import CustomerSerializer, ProductSerializer, RegisterSerializer
from custom_user.models import User
from .serializers import UserSerializer
from rest_framework import status, response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.response import Response
from django.utils.crypto import get_random_string

# Checks if the current user is a superuser
class CheckSuperUser(APIView):
    def get(self, request, *args, **kwargs):
        if request.user.is_superuser:
            return response.Response({"is_superuser": True}, status=status.HTTP_200_OK)
        else:
            return response.Response({"is_superuser": False}, status=status.HTTP_200_OK)

# Checks if a user is logged in and returns their email
class CheckUserLoggedInView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        if request.user.is_authenticated:
            return response.Response({'is_logged_in': True, 'requested_user': request.user.email})
        else:
            return response.Response({'is_logged_in': False,'requested_user': None})

# Checks if a user is registered for a specific product
class CheckUserRegistered(APIView):
    permission_classes = [AllowAny]

    def get(self, request, p_id, email):
        product = get_object_or_404(Product, id=p_id)
        customer = get_object_or_404(Customer, email=email, product=product)
        return response.Response({'position': customer.position_number, 'email': email, 'registered': True, 'referral_id': customer.referral_id})


# Retrieves and filters customers for a specific product for admin
class FilterCustomersForProductsForAdmin(APIView):
    permission_classes = [AllowAny]

    def get(self, request, p_id):
        product = get_object_or_404(Product, id=p_id)
        customers = Customer.objects.filter(product=product)
        serializer_class = CustomerSerializer(customers, many=True)
        return Response({'customers': serializer_class.data})
    
# Retrieves and filters customers for a specific product
class FilterCustomersForProducts(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        email = request.user.email
        products = Product.objects.filter(customers__email=email)

        data = []
        for product in products:
            customer = product.customers.filter(email=email).first()
            if customer:
                data.append({
                    'id': product.id,
                    'name': product.name,
                    'position_number': customer.position_number,
                    'referral_id': customer.referral_id
                })

        return response.Response(data)

class FilterCustomersForProductsWithEmail(APIView):
    permission_classes = [AllowAny]

    def get(self, request, email):
        products = Product.objects.filter(customers__email=email)

        data = []
        for product in products:
            customer = product.customers.filter(email=email).first()
            if customer:
                data.append({
                    'id': product.id,
                    'name': product.name,
                    'position_number': customer.position_number,
                    'referral_id': customer.referral_id
                })

        return response.Response(data)
# Creates a new user
class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# Lists and creates products
class ProductListCreateView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = self.request.user
        print(user)
        # Pass the user to the 'created_by' field during save
        if user.is_authenticated:

            serializer.save(created_by=user)
        else:
            serializer.save()
# Retrieves, updates, and destroys products
class ProductRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_class = [AllowAny]


class ProductDelete(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
# Lists and creates customers
class CustomerListCreateView(ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_class = [AllowAny]

# Retrieves, updates, and destroys customers
class CustomerRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_class = [AllowAny]

# Retrieves customer details by product ID and email
class CustomerRetrieveyView(RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_class = [AllowAny]

    def get(self, request, p_id, email):
        customer = Customer.objects.get(email=email, product=p_id)
        return Response({'position': customer.position_number, 'referral_id': customer.referral_id})

# Registers a new customer
class RegisterCustomerView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Customer.objects.all()
    serializer_class = RegisterSerializer

# Checks a customer's position and sends an email if the position is 1
class CheckPositionAndSendEmailAPIView(APIView):
    def get(self, request, ref_id):
        customer = get_object_or_404(Customer, referral_id=ref_id)
        
        if customer.position_number == 1:
            self.send_email(customer)
            return Response({'status': 'success', 'message': 'Email sent successfully.'}, status=status.HTTP_200_OK)
        
        return Response({'status': 'failure', 'message': 'Customer position is not 1.'}, status=status.HTTP_400_BAD_REQUEST)

    def send_email(self, customer):
        # Generate a random coupon code
        coupon_code = get_random_string(12).upper()

        subject = 'Congratulations on Your Position!'
        message = (
            f'Hello, {customer.email}!\n\n'
            f'You are now in position {customer.position_number} for the product {customer.product.name}.\n'
            f'Here is your coupon code: {coupon_code}\n\n'
            'Thank you for participating!'
        )
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [customer.email]

        send_mail(subject, message, from_email, recipient_list)
