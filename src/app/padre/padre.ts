import { Component } from '@angular/core';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  mensaje: string = '';

  // Se eminitió una cadena, es lo que vamos a recivir del componente hijo
  recibirNotificacion(mensaje: string){
    this.mensaje = mensaje;
  }
}
