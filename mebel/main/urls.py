from django.urls import path
from . import views


urlpatterns = [
    path("",views.home),
    path("wp-admin/<int:pk>/update",views.ArticleUpdateView.as_view()),
    path("wp-admin/<int:pk>/delete",views.ArticleDeleteView.as_view())
]
