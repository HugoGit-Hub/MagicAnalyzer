import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {SearchCardExternal} from '../../externals/search-card.external';
import {debounceTime, distinctUntilChanged, map, Observable, of, Subject, switchMap} from 'rxjs';
import {CardDto} from '../../dtos/card.dto';

@Component({
  selector: 'search-cards',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './search-card.component.html',
  styleUrl: 'search-card.component.css'
})

export class SearchCard {
  private searchQuery: Subject<string> = new Subject<string>();

  protected filteredResults:Observable<string[]> = of([]);
  protected cardName: string = "";
  protected card: CardDto = {} as CardDto;

  constructor(private searchCardExternal: SearchCardExternal) {
    this.filteredResults = this.searchQuery.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        if (query.trim().length === 0) {
          return of([]);
        }

        return this.searchCardExternal.autocomplete(query);
      })
    );
  }

  protected onSearch(event: Event): void {
    const query: string = (event.target as HTMLInputElement).value.toLowerCase().trim();

    this.searchQuery.next(query);
  }

  protected selectCard(cardName: string): void {
    this.cardName = cardName;

    this.searchCardExternal.getCardByExactName(this.cardName)
      .pipe(map(response => response))
      .subscribe((card: CardDto) => this.card = card);
  }
}
