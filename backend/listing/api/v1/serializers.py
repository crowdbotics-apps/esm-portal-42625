from rest_framework import serializers
from listing.models import Photo,Listing,Listing,Photo

class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = "__all__"

class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listing
        fields = "__all__"