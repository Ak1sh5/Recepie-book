import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private recipeApiUrl = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe';
  private recipeApiKey = 'fc0651007bmshea3172ea513eadcp118aebjsndf485bc99a6e';

  private imageApiUrl = 'https://google-api31.p.rapidapi.com/imagesearch';
  private imageApiKey = 'fc0651007bmshea3172ea513eadcp118aebjsndf485bc99a6e';

  constructor(private http: HttpClient) {}

  searchRecipe(query: string): Observable<any> {
    const url = `${this.recipeApiUrl}?query=${query}`;

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.recipeApiKey,
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    });

    return this.http.get<any>(url, { headers });
  }

  searchImage(recipeTitle: string): Observable<any> {
    const url = this.imageApiUrl;
    
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'X-RapidAPI-Key': this.imageApiKey,
      'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
    });

    const body = {
      text: recipeTitle,
      safesearch: 'on',
      region: 'wt-wt',
      color: '',
      size: '',
      type_image: '',
      layout: '',
      max_results: 100
    };

    return this.http.post<any>(url, body, { headers });
  }
}
