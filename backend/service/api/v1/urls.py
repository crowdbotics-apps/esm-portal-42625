
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ServiceViewSet,PackageViewSet,PackageViewSet,ServiceViewSet,PackageViewSet,ServiceViewSet,PackageViewSet,ServiceViewSet
router = DefaultRouter()
router.register('service', ServiceViewSet )
router.register('package', PackageViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
