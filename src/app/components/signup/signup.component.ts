import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(public  firebaseService: FirebaseService) {}

  onSubmit(): void {
    this.firebaseService.registerUser();
  }
}
