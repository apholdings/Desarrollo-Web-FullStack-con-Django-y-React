from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category'
        ]

class PostListSerializer(serializers.ModelSerializer):
    category=CategorySerializer()
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'views',
            'category'
        ]