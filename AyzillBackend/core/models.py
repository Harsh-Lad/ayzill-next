from django.db import models

# Create your models here.

class Products(models.Model):
    productName = models.CharField(max_length=255)
    productLot = models.CharField(max_length=255)
    productPrice = models.IntegerField()
    productDesc = models.TextField()
    productImage = models.ImageField(upload_to='images/products')
    dateAdded = models.DateField(auto_now_add=True)
    is_published = models.BooleanField(default=False)
    bottleSize = models.IntegerField()

    def __str__(self):
        return self.productName


class Blogs(models.Model):
    blogName = models.CharField(max_length=255)
    blogImage = models.ImageField(upload_to='images/blogs')
    dateAdded = models.DateField(auto_now_add=True)
    is_published = models.BooleanField(default=False)
    productDesc = models.TextField()

    def __str__(self):
        return self.blogName

