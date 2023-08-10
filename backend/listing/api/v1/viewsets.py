from rest_framework import authentication
from listing.models import Photo,Photo,Photo
from .serializers import PhotoSerializer,PhotoSerializer,PhotoSerializer
from rest_framework import viewsets

class PhotoViewSet(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Photo.objects.all()