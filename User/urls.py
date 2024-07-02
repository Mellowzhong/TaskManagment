from django.urls import path
from . import views

urlpatterns = [
    path('apiV1/<str:email>/', views.UserByEmail.as_view(), name='user-by-email'),
]