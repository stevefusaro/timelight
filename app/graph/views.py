from rest_framework import authentication
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import list_route
from rest_framework.response import Response

from neo4j.v1 import GraphDatabase, basic_auth

driver = GraphDatabase.driver("bolt://localhost:7687", auth=basic_auth("neo4j", "ezpass"), encrypted=False)


class GraphApi(ViewSet):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = ()

    @list_route(methods=['get'])
    def q(self, request):
        resp = []
        query = "MATCH (a:Person) return a"
        with driver.session() as session:
            with session.begin_transaction() as tx:
                for row in tx.run(query):
                    resp.append(row)
        return Response(resp)
