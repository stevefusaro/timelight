from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=256)
    timestamp = models.DateTimeField(null=False)
    created_at = models.DateTimeField(null=False, auto_now_add=True)
    updated_at = models.DateTimeField(null=False, auto_now=True)

# Store event dates in a different model that captures the nature of the time, e.g.
# Target date vs appointment date vs date range
