import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SavedRecepiesComponent } from './saved-recepies/saved-recepies.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  {path:'home', component:HomeComponent},
  {path:'saved',component:SavedRecepiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
