"""
StringProperty, IntegerProperty, FloatProperty, BooleanProperty, ArrayProperty
DateProperty, DateTimeProperty, JSONProperty, AliasProperty
"""
from datetime import datetime
from uuid import uuid4
import pytz

from neomodel import StringProperty, DateTimeProperty, IntegerProperty
from lib.node import StructuredNode


class NounNode(StructuredNode):
    noun = StringProperty(required=True)


class PersonNode(StructuredNode):
    user_id = IntegerProperty(required=True, unique_index=True)
    email = StringProperty(required=True, unique_index=True)
    first_name = StringProperty(required=True)
    last_name = StringProperty(required=True)


class EventNode(StructuredNode):
    timestamp = DateTimeProperty(required=True)
