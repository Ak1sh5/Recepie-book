import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient} from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/dataSercice';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  searchResults: any[] | undefined;
  imageResult:any[] | undefined ;
  
  constructor(private datafetch: DataService,
    private apiService: ApiService,
    private firebaseService:FirebaseService,
    private router:Router,private firestore: AngularFirestore,private afAuth: AngularFireAuth) {};


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
      this.router.navigate(['/about']);
    })
    .catch((error: any) => {
      console.error('Authentication failed:', error);
    });
}
}

