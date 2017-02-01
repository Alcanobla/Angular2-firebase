import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import * as firebase from 'firebase-tools/node_modules/firebase'; 

@Injectable()
export class ZonasvalorserviceService {

  
 // firebase.initializeApp(config);

  
 

   // Definimos un método que devuelve las zonas de valor
  getZonasvalor() {
    let zonas = "Listado zonas desde servicio: ";
    return zonas;
  }

}
