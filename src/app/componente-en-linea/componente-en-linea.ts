import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: ` 
  <h1>{{tituloComponenteInline}}</h1>
  <p>componente-en-linea works!</p> 
  `,
  styles: `
    h1 {
      color: blue;
    }
    p {
      font-size: larger;
      font-weight: 400;
    }
  `,
})
export class ComponenteEnLinea {
  tituloComponenteInline = "Titulo Componente En Linea";
}
