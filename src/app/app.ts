import { Component, signal } from '@angular/core';
import { Saludar } from './saludar/saludar';
import { ComponenteIf } from "./componente-if/componente-if";

@Component({
  selector: 'app-root',
  imports: [ComponenteIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Directiva @if en Angular';
}
