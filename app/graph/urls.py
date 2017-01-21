from rest_framework import routers
from graph import views

router = routers.DefaultRouter()
router.register(r'graph', views.GraphApi, base_name='graph')

urlpatterns = router.urls
