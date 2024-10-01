from rest_framework import serializers
from .models import Customer, Product
from django.db import IntegrityError
from custom_user.models import User

# Serializes user data, including password creation and hashing
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

# Serializes customer data, including all model fields
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = "__all__"

# Serializes product data, including associated customers
class ProductSerializer(serializers.ModelSerializer):
    customers = CustomerSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'created_by', 'customers', 'card_image')

# Handles customer registration logic, including position and referral processing
class RegisterSerializer(serializers.ModelSerializer):
    referral_id = serializers.CharField(max_length=10, required=False, allow_blank=True, allow_null=True)

    class Meta:
        model = Customer
        fields = ['email', 'product', 'referral_id', "position_number"]
        extra_kwargs = {"position_number": {"read_only": True}}


# # Handles customer registration logic, including position and referral processing
# class RegisterSerializer(serializers.ModelSerializer):
#     referral_id = serializers.CharField(max_length=10, required=False, allow_blank=True, allow_null=True)

#     class Meta:
#         model = Customer
#         fields = ['email', 'product', 'referral_id', "position_number"]
#         extra_kwargs = {"position_number": {"read_only": True}}

#     def create(self, validated_data):
#         customer_email = validated_data.get('email')
#         product = validated_data.get('product')
#         referral_id = validated_data.get('referral_id', None)

#         try:
#             customer_exists = Customer.objects.filter(email=customer_email, product=product).exists()

#             if not customer_exists:
#                 if referral_id:
#                     referred_customer = Customer.objects.filter(referral_id=referral_id, product=product).first()

#                     if referred_customer:
#                         current_position_number = referred_customer.position_number
#                         if current_position_number > 1:
#                             target_position_number = current_position_number - 1

#                             # Move the referred customer up
#                             referred_customer.position_number = target_position_number
#                             referred_customer.save()

#                             # Move other customers up by one position
#                             customers_to_move_up = Customer.objects.filter(
#                                 product=product,
#                                 position_number__gt=target_position_number
#                             ).order_by('position_number')

#                             for customer in customers_to_move_up:
#                                 next_position_number = customer.position_number - 1
#                                 if not Customer.objects.filter(
#                                     product=product,
#                                     position_number=next_position_number
#                                 ).exists():
#                                     customer.position_number = next_position_number
#                                     customer.save()
#                                 else:
#                                     break

#                 # Determine the new position for the new customer
#                 last_position = Customer.objects.filter(product=product).order_by('-position_number').first()
#                 new_position_number = 99 if last_position is None else last_position.position_number + 1

#                 customer = Customer(
#                     email=customer_email, 
#                     product=product, 
#                     position_number=new_position_number
#                 )
#                 customer.save()

#                 return customer
#             else:
#                 raise serializers.ValidationError({"error": "Customer already registered."})

#         except IntegrityError:
#             raise serializers.ValidationError({"error": "Customer registration failed due to an integrity constraint."})
