import os
import django
import random
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hh_back.settings')
django.setup()

from api.models import Companies, Vacancies

fake = Faker()

def populate_data(num_companies=5, num_vacancies=20):
    companies = []
    for _ in range(num_companies):
        company = Companies.objects.create(
            name=fake.company(),
            description=fake.text(),
            city=fake.city(),
            address=fake.address()
        )
        companies.append(company)

    for _ in range(num_vacancies):
        Vacancies.objects.create(
            name=fake.job(),
            description=fake.text(),
            salary=round(random.uniform(1000, 10000), 2),
            company=random.choice(companies)
        )

    print(f"✅ Created {num_companies} companies and {num_vacancies} vacancies")

if __name__ == '__main__':
    populate_data()
