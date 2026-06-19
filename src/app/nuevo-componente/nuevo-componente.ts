import { Component } from '@angular/core';
import { ComponenteEnLinea } from "../componente-en-linea/componente-en-linea";

@Component({
  selector: 'app-nuevo-componente',
  imports: [ComponenteEnLinea],
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css',
})
export class NuevoComponente {
  tituloNuevoComponente = "Nuevo Componente";
}
