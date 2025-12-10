import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-navegacion.html',
  styleUrls: ['./barra-navegacion.scss']
})
export class BarraNavegacionComponent implements OnChanges {

  @Input() categoria: string = 'home';

  titulo = '';
  opciones: any[] = [];
  activaId = 'home';

  constructor(private router: Router) {
    this.inicializarHome();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoria']) {
      this.actualizarCategoria(this.categoria);
    }
  }

  private inicializarHome() {
    this.titulo = 'Inicio';
    this.opciones = [
      { label: 'Home', id: 'home', ruta: 'home', funcional: true },
      { label: 'Buscar', id: 'buscar', ruta: 'buscar', funcional: true },
      { label: 'HTML', id: 'html', ruta: 'html', funcional: true },
      { label: 'Opción Extra', id: 'opt4', funcional: false }
    ];
    this.activaId = 'home';
  }

  private actualizarCategoria(categoria: string) {
    if (categoria === 'home') {
      this.titulo = 'Inicio';
      this.opciones = [
        { label: 'Home', id: 'home', ruta: 'home', funcional: true },
        { label: 'Buscar', id: 'buscar', ruta: 'buscar', funcional: true },
        { label: 'HTML', id: 'html', ruta: 'html', funcional: true },
        { label: 'Opción Extra', id: 'opt4', funcional: false }
      ];
      this.activaId = 'home';
    } else if (categoria === 'buscar') {
      this.titulo = 'Buscador';
      this.opciones = [
        { label: 'Tema 1', id: 'tema1', funcional: false },
        { label: 'Tema 2', id: 'tema2', funcional: false },
        { label: 'Tema 3', id: 'tema3', funcional: false },
        { label: 'Opción Extra', id: 'opt4', funcional: false }
      ];
      this.activaId = '';
    } else if (categoria === 'html') {
      this.titulo = 'Sección HTML';
      this.opciones = [
        { label: 'Contenido 1', id: 'cont1', funcional: false },
        { label: 'Contenido 2', id: 'cont2', funcional: false },
        { label: 'Contenido 3', id: 'cont3', funcional: false },
        { label: 'Opción Extra', id: 'opt4', funcional: false }
      ];
      this.activaId = '';
    }
  }

  navegar(op: any) {
    // Si la opción tiene ruta, navega a esa ruta
    if (op.ruta) {
      this.activaId = op.id;
      this.router.navigate([op.ruta]);
    } else {
      // Si no tiene ruta, navega a home por defecto
      this.activaId = op.id;
      this.router.navigate(['home']);
    }
  }

  esActivo(op: any): boolean {
    return this.activaId === op.id;
  }
}
