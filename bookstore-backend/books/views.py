from rest_framework import viewsets
from .models import Book, Category
from .serializers import BookSerializer, CategorySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
# from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_protect
# from django.contrib.auth import logout
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt



from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.middleware.csrf import get_token
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken




from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Book
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import CartItem, Book

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import CartItem

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):
    book_id = request.data.get('book_id')
    quantity = request.data.get('quantity', 1)

    if not book_id:
        return Response({'error': 'Book ID is required.'}, status=status.HTTP_400_BAD_REQUEST)

    cart_item, created = CartItem.objects.get_or_create(
        user=request.user,
        book_id=book_id,
        defaults={'quantity': quantity}
    )

    if not created:  # If the item already exists, update the quantity
        cart_item.quantity += quantity
        cart_item.save()

    return Response({'message': 'Book added to cart!'}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_cart_items(request):
    cart_items = CartItem.objects.filter(user=request.user)
    data = [{"id": item.id, "book_id": item.book_id, "quantity": item.quantity} for item in cart_items]
    return Response(data, status=status.HTTP_200_OK)

@api_view(['POST'])
def update_cart_item(request, pk):
    try:
        item = CartItem.objects.get(pk=pk)
        quantity = request.data.get('quantity')
        if quantity is not None and quantity > 0:
            item.quantity = quantity
            item.save()
            return Response({'status': 'success', 'quantity': item.quantity}, status=status.HTTP_200_OK)
        return Response({'status': 'error', 'message': 'Invalid quantity'}, status=status.HTTP_400_BAD_REQUEST)
    except CartItem.DoesNotExist:
        return Response({'status': 'error', 'message': 'Item not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_cart_item(request, pk):
    try:
        cart_item = CartItem.objects.get(pk=pk, user=request.user)
        cart_item.delete()
        return Response({'message': 'Cart item removed!'}, status=status.HTTP_204_NO_CONTENT)
    except CartItem.DoesNotExist:
        return Response({'error': 'Cart item not found.'}, status=status.HTTP_404_NOT_FOUND)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Wishlist
from .serializers import WishlistSerializer

@api_view(['POST'])
def add_to_wishlist(request):
    user = request.user
    book_id = request.data.get('book_id')
    
    # Check if the book is already in the cart (implement your cart logic here)
    if is_book_in_cart(user, book_id):
        return Response({"error": "Book already in cart."}, status=status.HTTP_400_BAD_REQUEST)
    
    wishlist_item, created = Wishlist.objects.get_or_create(user=user, book_id=book_id)
    if not created:
        return Response({"error": "Book already in wishlist."}, status=status.HTTP_400_BAD_REQUEST)

    return Response(WishlistSerializer(wishlist_item).data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_wishlist_items(request):
    user = request.user
    wishlist_items = Wishlist.objects.filter(user=user)
    serializer = WishlistSerializer(wishlist_items, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def remove_from_wishlist(request, pk):
    try:
        wishlist_item = Wishlist.objects.get(pk=pk, user=request.user)
        wishlist_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Wishlist.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

def is_book_in_cart(user, book_id):
    # Implement your logic to check if the book is in the user's cart
    return False  # Placeholder; replace with actual check



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def clear_cart(request):
    # Clear all cart items for the authenticated user
    CartItem.objects.filter(user=request.user).delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework import status

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
