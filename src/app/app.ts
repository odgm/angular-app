import { Component, signal } from '@angular/core';
import { Saludar } from './saludar/saludar';

@Component({
  selector: 'app-root',
  imports: [Saludar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Two way Binding Angular';
}
