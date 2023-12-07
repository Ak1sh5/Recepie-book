// authentication.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Sign in with email and password
  signIn(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
}
