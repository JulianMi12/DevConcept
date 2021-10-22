<<<<<<< HEAD
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { EmailComponentComponent } from './components/email-component/email-component.component';
import { SignUppageComponent } from './components/sign-uppage/sign-uppage.component';

const routes: Routes = [
  { path: 'lista-cosas', component:ListaCosasComponent },
  { path: 'nav-bar', component:NavbarComponent },
  { path: 'nueva-cosa', component:NuevaCosaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfileComponentComponent }
];
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
>>>>>>> main

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
