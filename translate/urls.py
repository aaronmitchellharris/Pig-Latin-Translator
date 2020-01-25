from django.urls import path

from . import views

app_name = 'translate'
urlpatterns = [
    path('', views.IndexView, name='index'),
]