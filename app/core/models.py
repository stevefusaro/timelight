from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=256)
    timestamp = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def _timestamp(self):
        return self.timestamp

# Store event dates in a different model that captures the nature of the time, e.g.
# Target date vs appointment date vs date range
