import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailComponentComponent } from './components/email-component/email-component.component';
import { SignUppageComponent } from './components/sign-uppage/sign-uppage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { UpdateComponentComponent } from './components/companies/update-component/update-component.component';
import { ServiceComponent } from './components/service/service.component';
import { NewServiceComponent } from './components/service/new-service/new-service.component';
import { UpdateServiceComponent } from './components/service/update-service/update-service.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { NewTrackingComponent } from './components/tracking/new-tracking/new-tracking.component';
import { UpdateTrackingComponent } from './components/tracking/update-tracking/update-tracking.component';

const routes: Routes = [
  { path: 'companies', component:CompaniesComponent },
  { path: 'new-company', component:NewCompanyComponent },
  { path: 'update-company', component:UpdateComponentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'service', component:ServiceComponent },
  { path: 'new-service', component:NewServiceComponent },
  { path: 'update-service', component:UpdateServiceComponent },
  { path: 'tracking', component:TrackingComponent },
  { path: 'new-tracking', component:NewTrackingComponent },
  { path: 'update-tracking', component:UpdateTrackingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
