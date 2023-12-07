// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  constructor(private fireauth : AngularFireAuth,private router:Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private formBuilder: FormBuilder){}


    signupForm: FormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      useremail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
    
    signInWithEmailAndPassword(email: string, password: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    async registerUser(): Promise<void> {
      try {
        const { name, useremail, password } = this.signupForm.value;
  
        // Create user in Firebase Authentication
        const credential = await this.afAuth.createUserWithEmailAndPassword(useremail, password);
  
        // Save additional user data to Firestore
        const user = {
          uid: credential.user?.uid,
          name,
          email: useremail,
        };
  
        await this.firestore.collection('users').doc(user.uid).set(user);
  
        alert('User registered successfully!');
        // You can add additional logic after successful registration.
      } catch (error) {
        alert(error);
        // Handle the error as needed, e.g., show an error message.
      }
    }

    


googleSignIn() {
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
    // Redirect to the '/home' route within the Angular application
    this.router.navigate(['/home']);
    console.log("success");
  }, err => {
    alert(err.message);
  });
}
}
