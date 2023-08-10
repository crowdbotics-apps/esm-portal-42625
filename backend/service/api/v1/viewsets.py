from rest_framework import authentication
from service.models import Service,Package,Booking,Booking,Package,Service,Booking,Package,Service
from .serializers import ServiceSerializer,PackageSerializer,BookingSerializer,BookingSerializer,PackageSerializer,ServiceSerializer,BookingSerializer,PackageSerializer,ServiceSerializer
from rest_framework import viewsets

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Service.objects.all()

class PackageViewSet(viewsets.ModelViewSet):
    serializer_class = PackageSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Package.objects.all()

class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Booking.objects.all()