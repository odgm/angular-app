import { Component, signal } from '@angular/core';
import { Saludar } from './saludar/saludar';
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";

@Component({
  selector: 'app-root',
  imports: [AgregarTarea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Local Reference Angular';
}
