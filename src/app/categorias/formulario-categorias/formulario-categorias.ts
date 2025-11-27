import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from '../services/categorias-service';

@Component({
  selector: 'app-formulario-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-categorias.html',
  styleUrls: ['./formulario-categorias.css'],
})
export class FormularioCategorias {

  categoria = { id: 0, nome: '' };
  modoEdicao = false;

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.modoEdicao = true;
      const cat = this.categoriasService.getCategoriaPorId(id);
      if (cat) this.categoria = { ...cat };
    }
  }

  salvar() {
    if (this.modoEdicao) {
      this.categoriasService.editar(this.categoria.id, this.categoria);
    } else {
      this.categoriasService.criar(this.categoria);
    }
  }
}
