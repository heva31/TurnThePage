# Generated by Django 5.0.1 on 2024-09-16 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0026_alter_book_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='google_books_id',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
