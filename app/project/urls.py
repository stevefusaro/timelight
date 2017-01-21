"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin


from rest_framework import routers, viewsets
from rest_framework.decorators import api_view
from rest_framework.decorators import list_route

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions


class GraphQueryViews(viewsets.ViewSet):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = () #permissions.IsAdminUser,)  # IsAdminOrIsSelf

    def get(self, request, format=None):
        return Response([])

    @list_route(methods=['get'])
    def q(self, request):
        return Response([])


router = routers.DefaultRouter()
router.register(r'graph', GraphQueryViews, base_name='graph')


@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    #url(r'^api/', include(router.urls, namespace='api')),
    #url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
