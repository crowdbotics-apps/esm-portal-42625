from django.conf import settings
from django.db import models
class Photo(models.Model):
    'Generated Model'
    image = models.ImageField(upload_to="photo/image/images/",)
    title = models.CharField(max_length=255,)
class Listing(models.Model):
    'Generated Model'
    address = models.CharField(blank=True,max_length=255,)
    photos = models.ForeignKey("listing.Photo",null=True,blank=True,on_delete=models.CASCADE,related_name="listing_photos",)

# Create your models here.
