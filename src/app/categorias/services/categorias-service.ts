import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  
  private categorias = [
    { id: 1, nome: 'Informática' },
    { id: 2, nome: 'Acessórios' },
    { id: 3, nome: 'Periféricos' },
  ];

  constructor() {}

  getCategorias() {
    return this.categorias;
  }

  getCategoriaPorId(id: number) {
    return this.categorias.find(c => c.id === id);
  }

  criar(categoria: any) {
    categoria.id = this.categorias.length + 1;
    this.categorias.push(categoria);
  }

  editar(id: number, dados: any) {
    const index = this.categorias.findIndex(c => c.id === id);
    if (index !== -1) {
      this.categorias[index] = { ...this.categorias[index], ...dados };
    }
  }

  excluir(id: number) {
    this.categorias = this.categorias.filter(c => c.id !== id);
  }
}
