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
    CustomerRetrieveyView, ProductDelete
)

urlpatterns = [
    path('super-user/', CheckSuperUser.as_view(), name='super-user-check'),
    path('login-check/', CheckUserLoggedInView.as_view(), name='login-check'),
    
    path('check-user-registered/<int:p_id>/<str:email>/', 
         CheckUserRegistered.as_view(), name='check-user-registered'),
    
    path('products/', ProductListCreateView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view(), name='product-detail'),
     path("products/delete/<int:pk>/", ProductDelete.as_view(), name="produc-delete"),
    path('products/<int:p_id>/customers/', 
         FilterCustomersForProducts.as_view(), name='filter-customers'),
    
    path('customers/', CustomerListCreateView.as_view(), name='customer-list'),
    path('customers/<int:pk>/', CustomerRetrieveUpdateDestroyView.as_view(), name='customer-detail'),
    path('customers/<int:p_id>/<str:email>/', 
         CustomerRetrieveyView.as_view(), name='customer-retrieve'),
    
    path('register/', RegisterCustomerView.as_view(), name='register-customer'),
    
    path('check-position/<str:ref_id>/', 
         CheckPositionAndSendEmailAPIView.as_view(), name='check-position-by-ref'),
]
