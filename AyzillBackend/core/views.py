from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import ProductSerializer, BlogSerializer

# Create your views here.
@api_view(('GET',))
def home(request):
    data = {
        'All endpoints' : '/',
        'All products' : 'allProds/',
        'All blogs' : 'allBlogs/'
    }
    return Response(data=data)

@api_view(('GET',))
def productsList(request):
    allProds = Products.objects.all()
    serializer = ProductSerializer(allProds, many=True).data
    return Response(data=serializer)

@api_view(('GET',))
def blogsList(request):
    allBlogs = Blogs.objects.all()
    serializer = BlogSerializer(allBlogs, many=True).data
    return Response(data=serializer)
