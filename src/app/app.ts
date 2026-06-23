import { Component, signal } from '@angular/core';
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from './replicador/replicador';

@Component({
  selector: 'app-root',
  imports: [Replicador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Property Binding Angular';
}
