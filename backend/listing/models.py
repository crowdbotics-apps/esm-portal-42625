from django.conf import settings
from django.db import models
class Photo(models.Model):
    'Generated Model'
    image = models.ImageField(upload_to="photo/image/images/",)
    title = models.CharField(max_length=255,)
class Listing(models.Model):
    'Generated Model'
    photos = models.ManyToManyField("listing.Photo",related_name="listing_photos",)
    address = models.CharField(max_length=255,)

# Create your models here.
