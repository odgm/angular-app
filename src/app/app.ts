import { Component } from '@angular/core';
import { Padre } from "./padre/padre";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Decorador @ViewChild en Angular';
}
