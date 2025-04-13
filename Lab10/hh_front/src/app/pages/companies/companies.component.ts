import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  companies: any[] = [];
  company: any = null;
  vacancies: any[] = [];

  mode: 'list' | 'detail' | 'vacancies' = 'list';

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (!id) {
        this.mode = 'list';
        this.loadCompanies();
      } else {
        const isVacancies = this.router.url.endsWith('vacancies');
        this.mode = isVacancies ? 'vacancies' : 'detail';

        if (this.mode === 'detail') {
          this.loadCompany(+id);
        } else if (this.mode === 'vacancies') {
          this.loadCompanyVacancies(+id);
        }
      }
    });
  }

  loadCompanies() {
    this.api.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  loadCompany(id: number) {
    this.api.getCompany(id).subscribe(data => {
      this.company = data;
    });
  }

  loadCompanyVacancies(id: number) {
    this.api.getCompanyVacancies(id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
