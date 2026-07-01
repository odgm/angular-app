import { Component, signal } from '@angular/core';
import { Saludar } from './saludar/saludar';
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";

@Component({
  selector: 'app-root',
  imports: [ComponenteFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Directiva @for en Angular';
}
