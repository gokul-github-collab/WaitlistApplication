from django.db import models
from django.utils.crypto import get_random_string
from custom_user.models import User
class Product(models.Model):
    name = models.CharField(max_length=255)  # Stores the name of the product
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    card_image = models.ImageField(upload_to='product_images/',
        blank=True,
        null=True,
        default='default_images/default_card_image.jpg'  # Default image
    )
    def __str__(self):
        return self.name

class Customer(models.Model):
    email = models.EmailField()  # Stores the email of the customer
    product = models.ForeignKey(Product, related_name='customers', on_delete=models.CASCADE)  # Links customer to a product
    position_number = models.IntegerField(blank=True, null=True)  # Stores the position number of the customer in the waitlist
    referral_id = models.CharField(max_length=10, unique=True, blank=True, null=True)  # Stores a unique referral ID for the customer

    def save(self, *args, **kwargs):
        if not self.referral_id:
            self.referral_id = get_random_string(10)  # Generate a random referral ID if not provided
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.email} - {self.product.name} - Position {self.position_number}'
    
