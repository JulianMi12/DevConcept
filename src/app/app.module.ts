import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './components/sign-uppage/sign-uppage.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from '@angular/fire/app';
import { EmailComponentComponent } from './components/email-component/email-component.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBxxj4wm3qaZtUg2iPIGDm24LMoED0oXys',
  authDomain: 'dev-concept.firebaseapp.com',
  databaseURL: 'https://dev-concept-default-rtdb.firebaseio.com',
  projectId: 'dev-concept',
  storageBucket: 'dev-concept.appspot.com',
  messagingSenderId: '4526513728'
  };

const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ListaCosasComponent,
    NuevaCosaComponent,
    NavbarComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent,
    EmailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
