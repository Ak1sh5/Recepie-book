import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = environment.apiKey;
  private apiUrl = 'https://food-recipes-with-images.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key':this.apiKey,  // Replace with your actual RapidAPI key
    // Add other headers as needed
  });

  private dataSubject = new Subject<any[]>();
  public data$: Observable<any[]> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) { }

  searchRecipes(query: string): void {
    const url = `${this.apiUrl}?q=${query}`;
    this.http.get<any>(url, { headers: this.headers }).subscribe(
      response => {
        this.dataSubject.next(response.d);
      },
      error => {
        console.error('Error fetching recipes:', error);
      }
    );
  }
}
