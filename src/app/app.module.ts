import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PruebaComponenteComponent } from './prueba-componente/prueba-componente.component';
import { ZonasValorComponent } from './zonas-valor/zonas-valor.component';
import { ZonasvalorserviceService } from './zonasvalorservice.service';
import { LoginComponent } from './login/login.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase-tools/node_modules/firebase'; 


export const firebaseConfig = {
     apiKey: "AIzaSyBp4tSa4lmbp4j6bBkn-SNcSXXNWGiTtrg",
    authDomain: "ocmicat-b2fb7.firebaseapp.com",
    databaseURL: "https://ocmicat-b2fb7.firebaseio.com",
    storageBucket: "ocmicat-b2fb7.appspot.com",
    messagingSenderId: "955943885437"
  };

export const firebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponenteComponent,
    ZonasValorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
