from django.db import models

# Create your models here.
class Articles(models.Model):
    name = models.CharField("Name",max_length=20)
    price = models.CharField("Price",max_length=20)
    type_model = models.TextField("Type",max_length=20)
    img_url = models.TextField("img_url")

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return "/"

    class Meta:
        verbose_name = "Shop"
        verbose_name_plural = "Shop"