from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Companies, Vacancies
from .serializers import CompanySerializer, VacancySerializer
from rest_framework import status

@api_view(['GET'])
def company_list(request):
    companies=Companies.objects.all()
    return Response(CompanySerializer(companies, many=True).data)

@api_view(['GET'])
def company_detail(request, id):
    company = Companies.objects.get(id=id)
    return Response(CompanySerializer(company).data)

@api_view(['GET'])
def company_vacancies(request, id):
    vacancies = Vacancies.objects.filter(company_id=id)
    return Response(VacancySerializer(vacancies, many=True).data)

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancies.objects.all()
    return Response(VacancySerializer(vacancies, many=True).data)

@api_view(['GET'])
def vacancy_detail(request, id):
    vacancy = Vacancies.objects.get(id=id)
    return Response(VacancySerializer(vacancy).data)

@api_view(['GET'])
def top_ten_vacancies(request):
    top_vacancies = Vacancies.objects.order_by('-salary')[:10]
    return Response(VacancySerializer(top_vacancies, many=True).data)


@api_view(['POST'])
def create_new_vacancy(request):
    serializer = VacancySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    print(serializer.errors)
    return Response(serializer.errors, status=400)
