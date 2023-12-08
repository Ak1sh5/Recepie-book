import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SavedRecepiesComponent } from './components/saved-recepies/saved-recepies.component';
import { NotesComponent } from './components/notes/notes.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  {path:'home', component:HomeComponent},
  {path:'saved',component:SavedRecepiesComponent},
  {path:'notes',component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
