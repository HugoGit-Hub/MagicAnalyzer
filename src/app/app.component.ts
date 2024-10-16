import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {InputsComponent} from './components/inputs/inputs.component';
import {SearchCard} from './components/search-card/search-card.component';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NavbarComponent,
    InputsComponent,
    SearchCard,
    BaseChartDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { }
