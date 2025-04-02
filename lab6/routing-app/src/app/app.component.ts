import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {Routes} from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-app';
}

const routes: Routes = [  
	{ path: 'first-component', component: FirstComponent },  
	{ path: 'second-component', component: SecondComponent },
];
