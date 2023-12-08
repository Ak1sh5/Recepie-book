import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SavedRecepiesComponent } from './components/saved-recepies/saved-recepies.component';
import { NotesComponent } from './components/notes/notes.component';
import { AuthGuardService } from './services/authgaurd.service';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: SignupComponent },
  {path:'notes',component:NotesComponent,canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent },
  {path:'home', component:HomeComponent,canActivate: [AuthGuardService]},
  {path:'saved',component:SavedRecepiesComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
