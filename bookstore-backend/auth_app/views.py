# # from rest_framework import status
# # from rest_framework.response import Response
# # from rest_framework.views import APIView
# # from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
# # from rest_framework_simplejwt.tokens import RefreshToken
# # from .serializers import SignupSerializer, LoginSerializer

# # class SignupView(APIView):
# #     def post(self, request):
# #         serializer = SignupSerializer(data=request.data)
# #         if serializer.is_valid():
# #             user = serializer.save()
# #             refresh = RefreshToken.for_user(user)
# #             return Response({
# #                 'refresh': str(refresh),
# #                 'access': str(refresh.access_token),
# #                 'user': {
# #                     'id': user.id,
# #                     'username': user.username,
# #                     'email': user.email
# #                 }
# #             })
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # class LoginView(APIView):
# #     def post(self, request):
# #         serializer = LoginSerializer(data=request.data)
# #         if serializer.is_valid():
# #             username = serializer.validated_data['username']
# #             password = serializer.validated_data['password']
# #             user = authenticate(username=username, password=password)
# #             if user:
# #                 auth_login(request, user)
# #                 refresh = RefreshToken.for_user(user)
# #                 return Response({
# #                     'refresh': str(refresh),
# #                     'access': str(refresh.access_token),
# #                     'user': {
# #                         'id': user.id,
# #                         'username': user.username,
# #                         'email': user.email
# #                     }
# #                 })
# #             return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
# #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # class LogoutView(APIView):
# #     def post(self, request):
# #         auth_logout(request)
# #         return Response(status=status.HTTP_204_NO_CONTENT)








# from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from rest_framework import status
# from .serializers import UserCreateSerializer

# @api_view(['POST'])
# def register(request):
#     serializer = UserCreateSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def login(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     user = authenticate(username=username, password=password)
#     if user is not None:
#         auth_login(request, user)
#         return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#     return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# @api_view(['POST'])
# def logout(request):
#     auth_logout(request)
#     return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)





# views.py
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

# @api_view(['POST'])
# def signup(request):
#     username = request.data.get('username')
#     email = request.data.get('email')
#     password = request.data.get('password')
#     if not username or not email or not password:
#         return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

#     user = User.objects.create_user(username=username, email=email, password=password)
#     token, created = Token.objects.get_or_create(user=user)
#     return Response({'token': token.key})


# views.py
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, email=email, password=password)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)




# @api_view(['POST'])
# def login(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     user = authenticate(username=username, password=password)
#     if user is not None:
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({'token': token.key})
#     return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

# views.py
from django.contrib.auth import authenticate, login as auth_login
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({'error': 'Both username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = authenticate(username=username, password=password)
    
    if user is not None:
        auth_login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)





# @api_view(['POST'])
# def logout(request):
#     token = request.data.get('token')
#     if token:
#         try:
#             token_obj = Token.objects.get(key=token)
#             token_obj.delete()
#             return Response({'message': 'Successfully logged out'})
#         except Token.DoesNotExist:
#             return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
#     return Response({'error': 'No token provided'}, status=status.HTTP_400_BAD_REQUEST)
# views.py
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def logout(request):
    token = request.headers.get('Authorization').split(' ')[1]
    try:
        Token.objects.get(key=token).delete()
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
    except Token.DoesNotExist:
        return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
