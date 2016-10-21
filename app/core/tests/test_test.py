import datetime

from django.utils import timezone
from django.test import TestCase

from ..models import Event


class EventTests(TestCase):

    def test_get_timestamp_property(self):
        timestamp = timezone.now() + datetime.timedelta(days=30)
        event = Event(timestamp=timestamp, name='Foo')
        self.assertIs(event._timestamp, event.timestamp)
