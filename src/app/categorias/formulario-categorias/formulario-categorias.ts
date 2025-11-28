import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from '../services/categorias-service';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-formulario-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-categorias.html',
  styleUrls: ['./formulario-categorias.css'],
})
export class FormularioCategorias implements OnInit {

  categoria: Categoria = { nome: '', ativo: true };
  modoEdicao = false;
  carregando = false;
  mensagemErro: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.modoEdicao = true;
      this.carregarCategoria(id);
    }
  }

  mostrarErro(mensagem: string) {
    this.mensagemErro = mensagem;
    setTimeout(() => this.mensagemErro = null, 5000);
  }

  carregarCategoria(id: number) {
    this.mensagemErro = null;
    this.carregando = true;
    this.categoriasService.getCategoriaPorId(id).pipe(take(1)).subscribe({
      next: (categoria) => {
        this.categoria = categoria;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao carregar categoria:', error);
        this.mostrarErro('Falha ao carregar categoria. Verifique o ID.');
        this.carregando = false;
      }
    });
  }

  salvar() {
    if (!this.categoria.nome || this.categoria.nome.trim() === '') {
      this.mostrarErro('Nome da categoria é obrigatório');
      return;
    }

    this.carregando = true;
    let observable: Observable<Categoria>;

    if (this.modoEdicao && this.categoria.id) {
      observable = this.categoriasService.editar(this.categoria.id, this.categoria);
    } else {
      observable = this.categoriasService.criar(this.categoria);
    }

    observable.pipe(take(1)).subscribe({
      next: () => {
        
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao salvar categoria:', error);
        this.mostrarErro('Falha ao salvar a categoria. Verifique os dados.');
        this.carregando = false;
      }
    });
  }
}