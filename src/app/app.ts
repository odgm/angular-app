import { Component, signal } from '@angular/core';
import { Padre } from "./padre/padre";

@Component({
  selector: 'app-root',
  imports: [Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Decorador @Output en Angular';
}
