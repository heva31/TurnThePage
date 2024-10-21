# # from django.contrib.auth.models import User
# # from rest_framework import serializers

# # class SignupSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = User
# #         fields = ('username', 'email', 'password')
# #         extra_kwargs = {'password': {'write_only': True}}

# #     def create(self, validated_data):
# #         user = User.objects.create_user(
# #             username=validated_data['username'],
# #             email=validated_data['email'],
# #             password=validated_data['password']
# #         )
# #         return user

# # class LoginSerializer(serializers.Serializer):
# #     username = serializers.CharField()
# #     password = serializers.CharField()




# from rest_framework import serializers
# from django.contrib.auth.models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email']

# class UserCreateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password']
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user





from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
