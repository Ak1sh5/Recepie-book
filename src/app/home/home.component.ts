import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { DataService } from './dataSercice';
import { ApiService } from '../api.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchResults: any[] | undefined;


  onSearch(query: string): void {
    this.apiService.search(query).subscribe(results => {
      this.searchResults = results;
      console.log(results);
    });
  }


    constructor(private datafetch: DataService,
    private http: HttpClient,  private dataService: ApiService,
    private authService:AuthenticationService,
    private apiService: ApiService,
    private router:Router,private firestore: AngularFirestore,private afAuth: AngularFireAuth) {};
    
      
  logout(){
    this.authService.signOut()
    .then(() => {
      // Authentication successful, navigate to the desired page
      this.router.navigate(['/about']);
    })
    .catch((error: any) => {
      // Handle authentication error (show an error message, etc.)
      console.error('Authentication failed:', error);
    });
   }
}
