from django.contrib import admin

from .models import Companies, Vacancies

# Register your models here.

admin.site.register(Companies)
admin.site.register(Vacancies)
