from django.urls import path
from . import views

urlpatterns = [
    path('',views.greet, name='Home-page'),
]