# Generated by Django 5.0.1 on 2024-09-15 12:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0014_cart_delete_cartitem'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='wishlist',
            unique_together=None,
        ),
        migrations.RemoveField(
            model_name='wishlist',
            name='book',
        ),
        migrations.RemoveField(
            model_name='wishlist',
            name='user',
        ),
        migrations.DeleteModel(
            name='Cart',
        ),
        migrations.DeleteModel(
            name='Wishlist',
        ),
    ]
