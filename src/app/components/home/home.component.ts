import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FirebaseService } from '../../services/firebase.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchResults: any[] | undefined;
  imageResult:any[] | undefined ;
  
  constructor(
    private apiService: ApiService,
    private firebaseService:FirebaseService,
    private router:Router,
    private location: Location // Inject Location
    ) {};


  onSearch(query: string): void {
    this.apiService.searchRecipe(query).subscribe(results => {
      this.searchResults = results;
      console.log(results);
  })
}


addNotes() {
  this.router.navigate(['/notes']);
}
      
  // home.component.ts
logout() {
  this.firebaseService.logOut()
    .then(() => {
      this.location.replaceState('/about');
      this.router.navigate(['/about']);
    })
    .catch((error: any) => {
      console.error('Authentication failed:', error);
    });
}
}

