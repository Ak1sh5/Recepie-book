import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponentComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { SavedRecepiesComponent } from './saved-recepies/saved-recepies.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponentComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    SavedRecepiesComponent,
    SearchBarComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, ReactiveFormsModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyCexPVF3Q7IdpRRJjX9v7_VSZbfIaZvDmU",
    authDomain: "recepiebook-69383.firebaseapp.com",
    projectId: "recepiebook-69383",
    storageBucket: "recepiebook-69383.appspot.com",
    messagingSenderId: "435649700431",
    appId: "1:435649700431:web:3ab7ba7529fa099a4ac03a",
    measurementId: "G-KVK6CMDWSC"}),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
