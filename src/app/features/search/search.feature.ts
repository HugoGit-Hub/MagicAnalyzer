import {Component} from '@angular/core';
import {SearchCard} from '../../components/search-card/search-card.component';
import {InputsComponent} from '../../components/inputs/inputs.component';

@Component({
  selector: 'search',
  standalone: true,
  imports: [
    SearchCard,
    InputsComponent
  ],
  templateUrl: './search.feature.html'
})

export class SearchFeature { }
