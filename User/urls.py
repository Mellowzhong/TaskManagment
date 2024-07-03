from django.urls import re_path
from . import views

urlpatterns = [
    re_path('^(?P<identifier>[\w.-@]+)/$', views.UserView.as_view(), name='user-detail'),
]