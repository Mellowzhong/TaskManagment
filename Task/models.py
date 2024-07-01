from django.db import models
from django.utils import timezone
from User.models import User

now = timezone.now().date()

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    desciption = models.TextField(blank=True)
    complete = models.BooleanField(default=False)
    created = models.DateField(default=now)
    taskCreator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks', default=None, blank=True)

    def __str__(self):
        return self.title