from django.db import models
# from task.models import Task

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    # tasks = models.ManyToManyField(Task, related_name='users', default=None, blank=True)

    def __str__(self):
        return self.name