from django.urls import path
from .views import (
    RegisterCustomerView,
    CustomerListCreateView,
    ProductListCreateView,
    CustomerRetrieveUpdateDestroyView,
    ProductRetrieveUpdateDestroyView,
    CheckSuperUser,
    CheckUserLoggedInView,
    CheckUserRegistered,
    FilterCustomersForProducts,
    CheckPositionAndSendEmailAPIView,
    CustomerRetrieveyView, 
    ProductDelete, 
    FilterCustomersForProductsWithEmail, 
    FilterCustomersForProductsForAdmin
)

urlpatterns = [
    # Superuser and login checks
    path('super-user/', CheckSuperUser.as_view(), name='super-user-check'),
    path('login-check/', CheckUserLoggedInView.as_view(), name='login-check'),

    # Customer Section
    path('customers/', CustomerListCreateView.as_view(), name='customer-list'),
    path('customers/<int:pk>/', CustomerRetrieveUpdateDestroyView.as_view(), name='customer-detail'),
    path('customers/<int:p_id>/<str:email>/', CustomerRetrieveyView.as_view(), name='customer-retrieve'),
    path('register/', RegisterCustomerView.as_view(), name='register-customer'),

    # Product Section
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
    path("products/delete/<int:pk>/", ProductDelete.as_view(), name="product-delete"),
    
    # Filter Section
    path('products/<int:p_id>/customers/', FilterCustomersForProductsForAdmin.as_view(), name='filter-customers-for-admin'),
    path('products/customers/', FilterCustomersForProducts.as_view(), name='filter-customers-with-default-request-method'),
    path('products/customers/<str:email>/', FilterCustomersForProductsWithEmail.as_view(), name='filter-customers-with-email'),

    # User and position checks
    path('check-user-registered/<int:p_id>/<str:email>/', 
         CheckUserRegistered.as_view(), name='check-user-registered'),
    path('check-position/<str:ref_id>/', 
         CheckPositionAndSendEmailAPIView.as_view(), name='check-position-by-ref'),
]
