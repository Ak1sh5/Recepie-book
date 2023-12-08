import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { SavedRecepiesComponent } from './components/saved-recepies/saved-recepies.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SigninComponentComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [

    AppComponent,
    AboutComponent,
    SavedRecepiesComponent,
    SearchBarComponent,
    CardComponent,
    HomeComponent,
    SignupComponent,
    SigninComponentComponent,
    TodoFormComponent,
    NotesComponent,
    TodoListComponent,
    


    
   
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
