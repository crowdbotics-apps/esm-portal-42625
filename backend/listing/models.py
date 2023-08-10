from django.conf import settings
from django.db import models
class Photo(models.Model):
    'Generated Model'
    image = models.ImageField(upload_to="photo/image/images/",)
    title = models.CharField(max_length=255,)
class Listing(models.Model):
    'Generated Model'
    address = models.CharField(max_length=255,blank=True,)
    photos = models.ForeignKey("listing.Photo",on_delete=models.CASCADE,null=True,blank=True,related_name="listing_photos",)

# Create your models here.
