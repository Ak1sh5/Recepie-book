import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  AuthenticationService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponentComponent {
  useremail: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router,private firebaseService:FirebaseService) {}

  signIn(): void {
    this.authService.signIn(this.useremail, this.password)
      .then(() => {
        // Authentication successful, navigate to the desired page
        this.router.navigate(['/home']);
      })
      .catch(error => {
        // Handle authentication error (show an error message, etc.)
        console.error('Authentication failed:', error);
      });
  }
  signInWithGoogle() {
    this.firebaseService.googleSignIn();
  }

  
  
}
