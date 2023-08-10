from rest_framework import serializers
from service.models import Service,Package,Booking,Booking,Package,Service

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = "__all__"

class PackageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Package
        fields = "__all__"

class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = "__all__"