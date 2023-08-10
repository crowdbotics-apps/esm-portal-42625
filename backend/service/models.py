from django.conf import settings
from django.db import models
class Service(models.Model):
    'Generated Model'
    title = models.CharField(max_length=255,)
    price = models.FloatField()
    duration = models.DurationField()
class Package(models.Model):
    'Generated Model'
    services = models.ManyToManyField("service.Service",related_name="package_services",)
    title = models.BigIntegerField(null=True,blank=True,)
    price = models.FloatField(null=True,blank=True,)

# Create your models here.
