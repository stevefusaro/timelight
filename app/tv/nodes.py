from neomodel import StringProperty

from lib.node import StructuredNode


class Lineup(StructuredNode):
    lineupID = StringProperty(required=True, unique_index=True)
    lineupName = StringProperty(required=True)
    lineupType = StringProperty(required=True)
    serviceArea = StringProperty()
    country = StringProperty(required=True)

    # Could potentially have a Provider node
    providerID = StringProperty(required=True)
    providerName = StringProperty(required=True)
