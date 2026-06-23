import { Component, signal } from '@angular/core';
import { Padre } from "./padre/padre";
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-root',
  imports: [Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Universidad Angular');
}
