
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PhotoViewSet,ListingViewSet,ListingViewSet,PhotoViewSet,ListingViewSet,PhotoViewSet,ListingViewSet,PhotoViewSet
router = DefaultRouter()
router.register('photo', PhotoViewSet )
router.register('listing', ListingViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
