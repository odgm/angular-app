import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";
import { Interpolacion } from "./interpolacion/interpolacion";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevoComponente, Interpolacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo desde Angular');
}
