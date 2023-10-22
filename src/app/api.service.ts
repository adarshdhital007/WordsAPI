import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Synonym } from 'src/models/Synonym.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSynonyms(word: string): Observable<any> {
    return this.http.get<Synonym[]>(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
  }
  getSimilar(word: string): Observable<any> {
    return this.http.get<Synonym[]>(
      `https://api.datamuse.com/words?sp=${word}`
    );
  }
}
