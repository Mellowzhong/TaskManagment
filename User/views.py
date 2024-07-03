from .models import User
from .serializer import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework import status

class UserView(APIView):
    def get_user(self, identifier):
        try:
            return User.objects.get(id=int(identifier))
        except ValueError:
            return get_object_or_404(User, email=identifier)

    def get(self, request, identifier, format=None):
        user = self.get_user(identifier)
    
        password = request.query_params.get('password')
        
        if not password:
            return Response({"error": "Password is required"}, status=status.HTTP_400_BAD_REQUEST)

        if password == user.password:
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid password"}, status=status.HTTP_401_UNAUTHORIZED)

    def put(self, request, identifier, format=None):
        user = self.get_user(identifier)
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, identifier, format=None):
        user = self.get_user(identifier)
        user.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

    def post(self, request, identifier, format=None):
        if User.objects.filter(email=identifier).exists():
            return Response({"error": "User with this email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)