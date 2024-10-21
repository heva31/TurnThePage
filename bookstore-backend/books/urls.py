from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, CategoryViewSet
from .views import add_to_cart, get_cart_items, update_cart_item, remove_cart_item,clear_cart
from .views import add_to_wishlist, get_wishlist_items, remove_from_wishlist
from .views import user_profile
router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cart/add/', add_to_cart, name='add_to_cart'),
    path('cart/', get_cart_items, name='get_cart_items'),
    path('cart/update/<int:pk>/', update_cart_item, name='update_cart_item'),
    path('cart/remove/<int:pk>/', remove_cart_item, name='remove_cart_item'),
    path('cart/clear/', clear_cart, name='clear-cart'),

    path('wishlist/add/', add_to_wishlist, name='add_to_wishlist'),
    path('wishlist/', get_wishlist_items, name='get_wishlist_items'),
    path('wishlist/remove/<int:pk>/', remove_from_wishlist, name='remove_from_wishlist'),
    
    path('profile/', user_profile, name='profile'),
   ]
