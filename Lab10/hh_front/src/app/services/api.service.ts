import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_BASE = 'http://localhost:8000/api'; // Укажи актуальный адрес Django-сервера

  constructor(private http: HttpClient) {}

  // Companies
  getCompanies(): Observable<any> {
    return this.http.get(`${this.API_BASE}/companies/`);
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.API_BASE}/companies/${id}/`);
  }

  getCompanyVacancies(id: number): Observable<any> {
    return this.http.get(`${this.API_BASE}/companies/${id}/vacancies/`);
  }

  // Vacancies
  getVacancies(): Observable<any> {
    return this.http.get(`${this.API_BASE}/vacancies/`);
  }

  getVacancy(id: number): Observable<any> {
    return this.http.get(`${this.API_BASE}/vacancies/${id}/`);
  }

  getTopVacancies(): Observable<any> {
    return this.http.get(`${this.API_BASE}/vacancies/top_ten/`);
  }

  createVacancy(data: any): Observable<any> {
    return this.http.post(`${this.API_BASE}/vacancies/create_new/`, data);
  }
}
