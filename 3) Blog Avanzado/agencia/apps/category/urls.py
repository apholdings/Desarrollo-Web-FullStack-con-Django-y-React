from django.urls import path

from .views import *

urlpatterns = [
    path('list', ListCategoriesView.as_view())
]