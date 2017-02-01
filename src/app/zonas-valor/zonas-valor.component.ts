import { Component, OnInit } from '@angular/core';
import { ZonasvalorserviceService } from '../zonasvalorservice.service';

@Component({
  selector: 'app-zonas-valor',
  templateUrl: './zonas-valor.component.html',
  styleUrls: ['./zonas-valor.component.css'],
  providers: [ZonasvalorserviceService]
})

export class ZonasValorComponent implements OnInit {
 
// Definimos el array
    zonas = [
        {
            "zona": "R12",
            "municipio": "Madrid",
            "anio": "2016"
        },
        {
            "zona": "R20",
            "municipio": "MAdrid",
            "anio": "2015"
        },
        {
            "zona": "R32",
            "municipio": "Madrid",
            "anio": "2014"
        }];
        
  // Llamamos al método del servicio
  public zonaslista;

  constructor(private _zonasvalor: ZonasvalorserviceService) { };

 
  ngOnInit() {
      this.zonaslista = this._zonasvalor.getZonasvalor();
  }

}
