import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {SearchCardExternal} from '../../externals/search-card.external';

@Component({
  selector: 'search-cards',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './search-card.component.html',
  styleUrl: 'search-card.component.css'
})

export class SearchCard {
  protected filteredResults:string[] = [];

  constructor(private searchCardExternal: SearchCardExternal) {
  }


  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();

    if (query.trim().length > 0) {
      this.searchCardExternal.autocomplete(query).subscribe(results => {
        this.filteredResults = results;
      });
    } else {
      this.filteredResults = [];
    }
  }
}
