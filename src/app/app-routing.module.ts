import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailComponentComponent } from './components/email-component/email-component.component';
import { SignUppageComponent } from './components/sign-uppage/sign-uppage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { ServiceComponent } from './components/service/service.component';
import { NewServiceComponent } from './components/service/new-service/new-service.component';
import { TrackingComponent } from './components/tracking/tracking.component';

const routes: Routes = [
  { path: 'companies', component:CompaniesComponent },
  { path: 'new-company', component:NewCompanyComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'service', component:ServiceComponent },
  { path: 'new-service', component:NewServiceComponent },
  { path: 'tracking', component:TrackingComponent },
  { path: 'update/:id', component:NewCompanyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
