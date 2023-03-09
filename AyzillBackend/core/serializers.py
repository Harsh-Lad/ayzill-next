from rest_framework import serializers
from .models import Products, Blogs

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products 
        fields ="__all__"

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs 
        fields ="__all__"