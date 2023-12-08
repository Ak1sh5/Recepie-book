import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponentComponent {
  useremail: string = '';
  password: string = '';

  constructor(private router: Router,private firebaseService:FirebaseService) {}

  signIn(): void {
    this.firebaseService.signIn(this.useremail, this.password)
  }
  signInWithGoogle() {
    this.firebaseService.googleSignIn();
  }

  
  
}
