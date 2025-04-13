from rest_framework import serializers
from .models import Companies, Vacancies

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Companies
        fields = '__all__'

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancies
        fields = '__all__'

