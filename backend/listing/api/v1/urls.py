
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PhotoViewSet,PhotoViewSet,PhotoViewSet,PhotoViewSet
router = DefaultRouter()
router.register('photo', PhotoViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
