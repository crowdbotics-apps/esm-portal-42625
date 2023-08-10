from rest_framework import serializers
from listing.models import Photo,Photo

class PhotoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Photo
        fields = "__all__"