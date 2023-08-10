from django.conf import settings
from django.db import models
class Service(models.Model):
    'Generated Model'
    title = models.CharField(max_length=255,)
    price = models.FloatField()
    duration = models.DurationField()
class Package(models.Model):
    'Generated Model'
    title = models.BigIntegerField(null=True,blank=True,)
    price = models.FloatField(null=True,blank=True,)
    services = models.ForeignKey("service.Service",on_delete=models.CASCADE,null=True,blank=True,related_name="package_services",)
    duration = models.DurationField(null=True,blank=True,)
class Booking(models.Model):
    'Generated Model'
    date = models.DateField(blank=True,)
    start_time = models.TimeField(blank=True,)
    end_time = models.TimeField(null=True,blank=True,)
    packages = models.ForeignKey("service.Package",on_delete=models.CASCADE,null=True,blank=True,related_name="booking_packages",)
    services = models.ForeignKey("service.Service",on_delete=models.CASCADE,null=True,blank=True,related_name="booking_services",)
    listing = models.OneToOneField("listing.Listing",on_delete=models.CASCADE,null=True,blank=True,related_name="booking_listing",)

# Create your models here.
