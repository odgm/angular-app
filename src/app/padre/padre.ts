import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  @ViewChild(HijoComponent) componenteHijo!: HijoComponent;

  cambiarMensajeHijo() {
    if (this.componenteHijo) {
      this.componenteHijo.cambiarMensaje('mensaje actualizado desde el componente padre');
    }
  }
}
