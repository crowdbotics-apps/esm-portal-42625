from django.contrib import admin
from .models import Booking,Package,Service
admin.site.register(Service)
admin.site.register(Package)
admin.site.register(Booking)

# Register your models here.
