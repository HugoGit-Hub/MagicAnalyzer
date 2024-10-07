import {Component} from '@angular/core';
import {SearchCard} from '../../components/search-card/search-card.component';
import {InputsComponent} from '../../components/inputs/inputs.component';

@Component({
  selector: 'analyzer',
  standalone: true,
  imports: [
    SearchCard,
    InputsComponent
  ],
  templateUrl: './analyzer.feature.html'
})

export class AnalyzerFeature { }
