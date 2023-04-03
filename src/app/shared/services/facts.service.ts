import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { fact } from '../models/fact';

@Injectable({
  providedIn: 'root',
})
export class FactsService {
  private apiUrl = 'https://cat-fact.herokuapp.com';

  constructor(private http: HttpClient) {}

  getRandomFact(): Observable<fact> {
    return this.http.get<fact[]>(`${this.apiUrl}/facts`).pipe(
      map((facts) => {
        return facts[Math.floor(Math.random() * 6)];
      })
    );
  }
}
