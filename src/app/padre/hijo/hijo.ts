import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje(){
    //Emitir el evento con un mensaje (en este caso se emite una cadena)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }
}
