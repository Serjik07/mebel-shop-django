# Generated by Django 4.2.2 on 2023-07-25 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_articles_type_model'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='type_model',
            field=models.TextField(max_length=20, verbose_name='Type'),
        ),
    ]
