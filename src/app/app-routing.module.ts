import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailComponentComponent } from './components/email-component/email-component.component';
import { SignUppageComponent } from './components/sign-uppage/sign-uppage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { UpdateComponentComponent } from './components/companies/update-component/update-component.component';

const routes: Routes = [
  { path: 'companies', component:CompaniesComponent },
  { path: 'new-company', component:NewCompanyComponent },
  { path: 'update-company', component:UpdateComponentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
