import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre implements AfterViewInit {

  @ViewChild(Hijo)
  componenteHijo!: Hijo;

  ngAfterViewInit() {
    console.log('ViewChild:', this.componenteHijo);
  }

  cambiarMensajeHijo() {
    console.log('Botón pulsado');
    console.log(this.componenteHijo);

    this.componenteHijo.cambiarMensaje('Nuevo mensaje');
  }

}
