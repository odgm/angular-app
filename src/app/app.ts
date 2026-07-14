import { Component, signal } from '@angular/core';
import { Padre } from "./padre/padre";
import { ViewChild } from "./view-child/view-child";

@Component({
  selector: 'app-root',
  imports: [ViewChild],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Decorador @ViewChild en Angular';
}
