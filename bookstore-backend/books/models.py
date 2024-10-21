from django.db import models

from django.contrib.auth.models import User
from django.utils import timezone
from django.conf import settings
from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Book(models.Model):
    id = models.CharField(max_length=255, primary_key=True) 
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    # cover_image = models.ImageField(upload_to='covers/', blank=True, null=True)
    cover_image_url = models.URLField(blank=True, null=True) 
    category = models.ForeignKey(Category, on_delete=models.CASCADE)  # ForeignKey to Category

    def __str__(self):
        return self.title


# class CartItem(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     book = models.ForeignKey(Book, on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField(default=1)
#     google_books_id = models.CharField(max_length=100, null=True, blank=True) 
#     def __str__(self):
#         return f'{self.book.title} - {self.quantity}'
# from django.db import models
# from django.contrib.auth.models import User
# from books.models import Book

# class CartItem(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True, blank=True)
#     google_books_id = models.CharField(max_length=100, null=True, blank=True)
#     quantity = models.PositiveIntegerField(default=1)

#     def __str__(self):
#         if self.book:
#             return f'{self.book.title} - {self.quantity}'
#         return f'Google Book ID: {self.google_books_id} - {self.quantity}'

from django.db import models
from django.contrib.auth.models import User

class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book_id = models.CharField(max_length=255,null=True)  # Assuming book ID is a string
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.user.username}'s cart item: {self.book_id} x {self.quantity}"



# class WishlistItem(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     book = models.ForeignKey(Book, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.book.title



# models.py
from django.db import models
from django.contrib.auth.models import User

class Wishlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book_id = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.user.username}'s Wishlist"
