import { Component, ViewChild } from '@angular/core';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  @ViewChild(Hijo) componenteHijo!: Hijo;

  cambiarMensajeHijo() {
    throw new Error('Method not implemented.');
  }
}
