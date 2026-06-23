import { Component, signal } from '@angular/core';
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";

@Component({
  selector: 'app-root',
  imports: [MostrarMensaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Universidad Angular';
}
