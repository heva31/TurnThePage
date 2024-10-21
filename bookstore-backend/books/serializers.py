from rest_framework import serializers
from .models import Book, Category

from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CartItem

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = Book
        fields = '__all__'
        

# class CartItemSerializer(serializers.ModelSerializer):
#     book = BookSerializer()

#     class Meta:
#         model = CartItem
#         fields = ['id', 'book', 'quantity']
from rest_framework import serializers
from .models import CartItem

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['id', 'book_id', 'quantity']


# from rest_framework import serializers
# from .models import CartItem

# class CartItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CartItem
#         fields = ['id', 'user', 'book', 'google_books_id', 'quantity']


# class WishlistItemSerializer(serializers.ModelSerializer):
#     book = BookSerializer()

#     class Meta:
#         model = WishlistItem
#         fields = ['id', 'book']

from rest_framework import serializers
from .models import Wishlist

class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist        
        fields = ['id', 'user', 'book_id']

# serializers.py

from rest_framework import serializers
from .models import User  # Adjust based on your user model
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
