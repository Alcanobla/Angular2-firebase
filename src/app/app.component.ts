import { Component } from '@angular/core';
import { PruebaComponenteComponent } from './prueba-componente/prueba-componente.component';
import { ZonasValorComponent } from './zonas-valor/zonas-valor.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Probando angular 2';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
