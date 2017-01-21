import requests

from django.core.management.base import BaseCommand
from django.conf import settings
from neomodel import db

from tv.nodes import Lineup


class Command(BaseCommand):
    help = 'HALP TEXT'

    def add_arguments(self, parser):
        parser.add_argument('zip_code', type=int)

    def handle(self, *args, **options):
        zip_code = options['zip_code']
        params = {
            'postalCode': zip_code,
            'api_key': settings.TV_MEDIA_API_KEY,
        }
        r = requests.get('http://api.tvmedia.ca/tv/v4/lineups', params=params)
        with db.transaction:
            for row in r.json():
                foo = Lineup.get_or_create(row)

        import ipdb; ipdb.set_trace()
