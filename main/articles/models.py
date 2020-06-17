from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length=400 )
    content = models.TextField()
    date = models.DateField(auto_now=True)

    objects = models.Manager()

    def __str__(self):
        return self.title

    class Meta:
        get_latest_by = ["-date"]
