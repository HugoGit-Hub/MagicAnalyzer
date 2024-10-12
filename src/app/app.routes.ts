import { Routes } from '@angular/router';
import {AnalyzerFeature} from './features/analyzer/analyzer.feature';
import {SearchFeature} from './features/search/search.feature';
import {HomeFeature} from './features/home/home.feature';
import {DeckFeature} from './features/deck/deck.feature';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeFeature },
  { path: 'analyzer', component: AnalyzerFeature },
  { path: 'search', component: SearchFeature },
  { path: 'deck', component: DeckFeature },
];
