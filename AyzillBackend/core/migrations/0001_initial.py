# Generated by Django 4.1.6 on 2023-02-09 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productName', models.CharField(max_length=255)),
                ('productLot', models.CharField(max_length=255)),
                ('productPrice', models.IntegerField()),
                ('productDesc', models.CharField(max_length=255)),
                ('dateAdded', models.DateField(auto_now_add=True)),
                ('is_published', models.BooleanField(default=False)),
            ],
        ),
    ]
