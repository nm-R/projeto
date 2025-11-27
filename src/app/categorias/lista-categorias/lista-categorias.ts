import { Component } from '@angular/core';
import { CategoriasService } from '../services/categorias-service';

interface Categoria {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-lista-categorias',
  standalone: false,
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css',
})
export class ListaCategorias {

  categorias: Categoria[] = [];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.categorias = this.categoriasService.getCategorias();
  }

  excluir(id: number) {
    this.categoriasService.excluir(id);
    this.categorias = this.categoriasService.getCategorias();
  }
}
