from rest_framework import authentication
from listing.models import Photo,Listing,Listing,Photo,Listing,Photo
from .serializers import PhotoSerializer,ListingSerializer,ListingSerializer,PhotoSerializer,ListingSerializer,PhotoSerializer
from rest_framework import viewsets

class PhotoViewSet(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Photo.objects.all()

class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Listing.objects.all()