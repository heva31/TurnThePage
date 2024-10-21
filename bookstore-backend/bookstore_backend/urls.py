from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('accounts/', include('allauth.urls')),  # Include allauth routes
    path('api/', include('books.urls')),  # Include your API URLs
    # path('api/auth/', include('auth_app.urls')),
    path('auth/', include('auth_app.urls')),
]