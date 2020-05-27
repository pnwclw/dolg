from django.urls import path

from .apps import DashboardConfig
from .views import DashboardView, AddNewItemView, ChangeItemView, DeleteItemView, BorrowedByMeListView, GivenByMeListView


app_name = DashboardConfig.name
urlpatterns = [
    path('', DashboardView.as_view(), name="main"),
    path('item/add/', AddNewItemView.as_view(), name="add-item"),
    path('item/<int:pk>/', ChangeItemView.as_view(), name="change-item"),
    path('item/<int:pk>/delete/', DeleteItemView.as_view(), name="delete-item"),
    path('borrowed/', BorrowedByMeListView.as_view(), name='borrowed'),
    path('given/', GivenByMeListView.as_view(), name='given')
]