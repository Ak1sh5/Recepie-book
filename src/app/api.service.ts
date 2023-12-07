import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe';
  private apiKey = 'fc0651007bmshea3172ea513eadcp118aebjsndf485bc99a6e';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}?query=${query}`;

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    });

    return this.http.get<any>(url, { headers });
  }
}
