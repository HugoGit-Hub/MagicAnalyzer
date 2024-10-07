import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Catalog} from '../dto/Catalog';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchCardExternal {
  constructor(private http: HttpClient) { }

  public autocomplete(value: string): Observable<string[]> {
    return this.http.get<Catalog>("https://api.scryfall.com/cards/autocomplete?q=" + value)
      .pipe(
        map(response => response.data)
      );
  }
}
