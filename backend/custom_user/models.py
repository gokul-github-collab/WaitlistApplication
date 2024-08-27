from django_use_email_as_username.models import BaseUser, BaseUserManager
from django.db import models

class User(BaseUser):
    objects = BaseUserManager()

class Base(models.Model):
    ha = models.CharField(max_length=100, blank=True, null=True)