import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-componente',
  templateUrl: './prueba-componente.component.html',
  styleUrls: ['./prueba-componente.component.css']
})
export class PruebaComponenteComponent implements OnInit {

  dato = "Creando componentes para DesarrolloWeb.com";

  texto: string =  "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo; 
  }

  constructor() { }

  ngOnInit() {
     console.log('componente inicializado...');
  }

}
