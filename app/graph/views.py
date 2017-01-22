from rest_framework import authentication
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import list_route
from rest_framework.response import Response

from neo4j.v1 import GraphDatabase, basic_auth

driver = GraphDatabase.driver("bolt://localhost:7687", auth=basic_auth("neo4j", "ezpass"), encrypted=False)


def _run_query(query, params=None):
    resp = []
    with driver.session() as session:
        with session.begin_transaction() as tx:
            for row in tx.run(query):
                resp.append(row)
    return resp


class GraphApi(ViewSet):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = ()

    @list_route(methods=['get'])
    def q(self, request):
        query = "MATCH (a:Person) return a"
        return Response(_run_query(query))

    @list_route(methods=['get'])
    def label_nodes(self, request):
        query = "MATCH (person:Person) RETURN person LIMIT 200"
        rows = _run_query(query)
        nodes = [row[0].__dict__ for row in rows]  # keys: labels, properties, id
        for node in nodes:
            node['labels'] = list(node['labels'])  # convert from set
        return Response(nodes)
