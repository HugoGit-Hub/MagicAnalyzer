import {HttpClient} from '@angular/common/http';
import {map, Observable, of, tap} from 'rxjs';
import {Catalog} from '../dto/Catalog';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchCardExternal {
  private cache: { [key: string]: string[] } = {};

  constructor(private http: HttpClient) { }

  public autocomplete(value: string): Observable<string[]> {
    if (this.cache[value]) {
      return of(this.cache[value]);
    }

    return this.http.get<Catalog>(`https://api.scryfall.com/cards/autocomplete?q=${value}`).pipe(
      tap(response => this.cache[value] = response.data),
      map(response => response.data)
    );
  }
}
