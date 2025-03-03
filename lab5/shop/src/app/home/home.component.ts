import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { GetDataService } from '../service/get-data.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  


  getCategoriesData:any;
  getApplianceProductData:any=[];

  constructor(
    private getData:GetDataService
  ){}
  ngOnInit(): void {
      this.getCategoriesData = this.getData.categoriesData;
      this.getData.productData.filter((ele:any)=>{
          if(ele.pdCategory == 'appliances')
          {
            this.getApplianceProductData.push(ele);
          }
      });
  }
}
