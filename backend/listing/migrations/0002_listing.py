# Generated by Django 2.2.28 on 2023-08-10 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=255)),
                ('photos', models.ManyToManyField(related_name='listing_photos', to='listing.Photo')),
            ],
        ),
    ]
