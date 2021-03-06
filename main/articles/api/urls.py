from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet


router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='article')
urlpatterns = router.urls




# from django.urls import path

# from .views import (
#     ArticleListView, 
#     ArticleDetailView ,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView,
#     ArticleRUDView
# )

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('create/', ArticleCreateView.as_view()),
#     path('<pk>', ArticleDetailView.as_view()),
#     path('<pk>/update/', ArticleUpdateView.as_view()),
#     path('<pk>/delete/', ArticleDeleteView.as_view()),
#     path('<pk>/rud/', ArticleRUDView.as_view()),  
# ]
