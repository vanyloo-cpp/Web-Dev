import { Routes } from '@angular/router';
import { CompaniesComponent } from './pages/companies/companies.component';


import { VacanciesComponent } from './pages/vacancies/vacancies.component';

export const routes: Routes = [  // ← добавь "export"
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompaniesComponent },
  { path: 'companies/:id/vacancies', component: CompaniesComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'vacancies/top_ten', component: VacanciesComponent },
  { path: 'vacancies/create_new', component: VacanciesComponent },
  { path: 'vacancies/:id', component: VacanciesComponent },
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
];
