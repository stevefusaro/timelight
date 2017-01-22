from rest_framework import routers
from graph import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'graph', views.GraphApi, base_name='graph')

urlpatterns = router.urls
