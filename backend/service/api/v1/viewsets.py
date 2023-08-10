from rest_framework import authentication
from service.models import Service,Package,Package,Service,Package,Service
from .serializers import ServiceSerializer,PackageSerializer,PackageSerializer,ServiceSerializer,PackageSerializer,ServiceSerializer
from rest_framework import viewsets

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Service.objects.all()

class PackageViewSet(viewsets.ModelViewSet):
    serializer_class = PackageSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Package.objects.all()