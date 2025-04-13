import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './vacancies.component.html'
})
export class VacanciesComponent implements OnInit {
  mode: 'list' | 'detail' | 'top' | 'create' = 'list';

  vacancies: any[] = [];
  vacancy: any = null;

  newVacancy = {
    name: '',
    salary: '',
    company: '',
    description: ''
  };

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const url = this.router.url;

    if (url.endsWith('/top_ten')) {
      this.mode = 'top';
      this.api.getTopVacancies().subscribe(data => this.vacancies = data);
    } else if (url.endsWith('/create_new')) {
      this.mode = 'create';
    } else if (id) {
      this.mode = 'detail';
      this.api.getVacancy(+id).subscribe(data => this.vacancy = data);
    } else {
      this.mode = 'list';
      this.api.getVacancies().subscribe(data => this.vacancies = data);
    }
  }

  createVacancy() {
    this.api.createVacancy(this.newVacancy).subscribe(response => {
      alert('Vacancy created!');
      this.router.navigate(['/vacancies']);
    });
  }
}
