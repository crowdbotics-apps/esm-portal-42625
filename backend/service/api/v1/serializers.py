from rest_framework import serializers
from service.models import Service,Package,Package,Service

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = "__all__"

class PackageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Package
        fields = "__all__"