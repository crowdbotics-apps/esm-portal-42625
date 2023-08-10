
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ServiceViewSet,PackageViewSet,BookingViewSet,BookingViewSet,PackageViewSet,ServiceViewSet,BookingViewSet,PackageViewSet,ServiceViewSet,BookingViewSet,PackageViewSet,ServiceViewSet
router = DefaultRouter()
router.register('service', ServiceViewSet )
router.register('package', PackageViewSet )
router.register('booking', BookingViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
