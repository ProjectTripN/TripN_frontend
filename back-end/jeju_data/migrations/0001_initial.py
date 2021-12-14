# Generated by Django 3.2.5 on 2021-12-13 13:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('image', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TourismCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.TextField()),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
            ],
            options={
                'db_table': 'category_tourism',
            },
        ),
        migrations.CreateModel(
            name='Tourism',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('address', models.TextField()),
                ('explanation', models.TextField(null=True)),
                ('lat', models.FloatField(null=True)),
                ('log', models.FloatField(null=True)),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.image')),
                ('tour_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='jeju_data.tourismcategory')),
            ],
            options={
                'db_table': 'tourism',
            },
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('loc', models.TextField()),
                ('explanation', models.TextField()),
                ('recommend', models.TextField()),
                ('lat', models.FloatField(null=True)),
                ('log', models.FloatField(null=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.image')),
            ],
            options={
                'db_table': 'shop',
            },
        ),
        migrations.CreateModel(
            name='RestaurantCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.TextField()),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
            ],
            options={
                'db_table': 'category_restaurant',
            },
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('loc', models.TextField()),
                ('recommend', models.TextField()),
                ('lat', models.FloatField(null=True)),
                ('log', models.FloatField(null=True)),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.image')),
                ('res_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='jeju_data.restaurantcategory')),
            ],
            options={
                'db_table': 'restaurant',
            },
        ),
        migrations.CreateModel(
            name='PlaneCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.TextField()),
                ('type', models.TextField()),
                ('section', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
            ],
            options={
                'db_table': 'category_plane',
            },
        ),
        migrations.CreateModel(
            name='Plane',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vihicleId', models.TextField()),
                ('airlineNm', models.TextField()),
                ('depPlandTime', models.TimeField()),
                ('arrPlandTime', models.TimeField()),
                ('economyCharge', models.IntegerField(choices=[('W', 'Korean Won (W)')], default='$')),
                ('plane_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='jeju_data.planecategory')),
            ],
            options={
                'db_table': 'plane',
            },
        ),
        migrations.CreateModel(
            name='Olle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.TextField()),
                ('name', models.TextField()),
                ('distance', models.FloatField()),
                ('time', models.TimeField()),
                ('starting_point', models.TextField()),
                ('end_point', models.TextField()),
                ('explanation', models.TextField()),
                ('lat', models.FloatField(null=True)),
                ('log', models.FloatField(null=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.image')),
            ],
            options={
                'db_table': 'olle',
            },
        ),
        migrations.CreateModel(
            name='ActivityCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.TextField()),
                ('type', models.TextField()),
                ('section', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
            ],
            options={
                'db_table': 'category_activity',
            },
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('start_business_time', models.TimeField()),
                ('end_business_time', models.TimeField()),
                ('time', models.TimeField()),
                ('contact', models.TextField()),
                ('loc', models.TextField()),
                ('price', models.IntegerField(choices=[('W', 'Korean Won (W)')], default='$')),
                ('lat', models.FloatField(null=True)),
                ('log', models.FloatField(null=True)),
                ('act_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='jeju_data.activitycategory')),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.image')),
            ],
            options={
                'db_table': 'activity',
            },
        ),
        migrations.CreateModel(
            name='AccommodationCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.TextField()),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.category')),
            ],
            options={
                'db_table': 'category_accommodation',
            },
        ),
        migrations.CreateModel(
            name='Accommodation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('loc', models.TextField()),
                ('price', models.IntegerField(choices=[('W', 'Korean Won (W)')], default='$')),
                ('contact', models.TextField()),
                ('standard_number', models.IntegerField()),
                ('lat', models.FloatField(null=True)),
                ('log', models.FloatField(null=True)),
                ('acc_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='jeju_data.accommodationcategory')),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='image.image')),
            ],
            options={
                'db_table': 'accommodation',
            },
        ),
    ]
