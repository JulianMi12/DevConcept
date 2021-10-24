import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUppageComponent } from './components/sign-uppage/sign-uppage.component';

import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { EmailComponentComponent } from './components/email-component/email-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { CargarScriptsService } from './services/cargar-scripts.service';
import { CompaniesComponent } from './components/companies/companies.component';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { UpdateComponentComponent } from './components/companies/update-component/update-component.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBxxj4wm3qaZtUg2iPIGDm24LMoED0oXys',
  authDomain: 'dev-concept.firebaseapp.com',
  databaseURL: 'https://dev-concept-default-rtdb.firebaseio.com',
  projectId: 'dev-concept',
  storageBucket: 'dev-concept.appspot.com',
  messagingSenderId: '4526513728'
  };



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignUppageComponent,
    EmailComponentComponent,
    FooterComponent,
    CompaniesComponent,
    NewCompanyComponent,
    UpdateComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
