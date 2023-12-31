# Generated by Django 2.2.28 on 2023-08-10 20:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0002_listing'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='address',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.RemoveField(
            model_name='listing',
            name='photos',
        ),
        migrations.AddField(
            model_name='listing',
            name='photos',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='listing_photos', to='listing.Photo'),
        ),
    ]
