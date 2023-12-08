
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private FirebaseService: FirebaseService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.FirebaseService.isLoggedIn()) {
      return true;
    } else {
      // If not logged in, navigate to the login page
      this.router.navigate(['/about']);
      return false;
    }
  }
}
