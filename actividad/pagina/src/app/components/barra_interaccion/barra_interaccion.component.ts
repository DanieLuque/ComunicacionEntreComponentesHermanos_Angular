import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barra-interaccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra_interaccion.component.html',
  styleUrls: ['./barra_interaccion.component.scss']
})
export class BarraInteraccionComponent {
  @Output() categoriaSeleccionada = new EventEmitter<string>();
  @Input() categoriaActual: string = 'home';

  categorias = [
    { id: 'home', label: 'Home', icono: '🏠' },
    { id: 'buscar', label: 'Buscar', icono: '🔍' },
    { id: 'html', label: 'HTML', icono: '📄' }
  ];

  seleccionar(categoria: string) {
    this.categoriaActual = categoria;
    this.categoriaSeleccionada.emit(categoria);
  }

  esActivo(id: string): boolean {
    return this.categoriaActual === id;
  }
}
