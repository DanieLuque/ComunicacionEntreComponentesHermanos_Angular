import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraInteraccionComponent } from './components/barra_interaccion/barra_interaccion.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    RouterOutlet,
    BarraInteraccionComponent,
    BarraNavegacionComponent
  ]
})
export class AppComponent {
  categoriaActual = 'home';

  actualizarCategoria(categoria: string) {
    this.categoriaActual = categoria;
  }
}
