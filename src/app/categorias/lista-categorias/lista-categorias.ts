import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriasService } from '../services/categorias-service';
import { Categoria } from '../models/categoria.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css',
})
export class ListaCategorias implements OnInit {

  categorias: Categoria[] = [];
  carregando = false;
  
  mensagemErro: string | null = null;

  constructor(
    private categoriasService: CategoriasService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.carregarCategorias();
  }

  mostrarErro(mensagem: string) {
    this.mensagemErro = mensagem;
    setTimeout(() => {
      this.mensagemErro = null;
      this.cd.detectChanges();
    }, 5000);
    this.cd.detectChanges();
  }

  carregarCategorias() {
    this.mensagemErro = null;
    this.carregando = true;
    this.cd.detectChanges();
    this.categoriasService.getCategorias().pipe(take(1)).subscribe({
      next: (categorias) => {
        this.categorias = categorias;
        this.carregando = false;
        this.cd.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao carregar categorias:', error);
        this.mostrarErro('Falha ao carregar categorias. Tente novamente.');
        this.carregando = false;
        this.cd.detectChanges();
      }
    });
  }

  excluir(id: number | undefined) {
    if (!id) {
      this.mostrarErro('ID inválido para exclusão.');
      return;
    }

    const categoria = this.categorias.find(c => c.id === id);

    if (window.confirm(`Tem certeza que deseja excluir a categoria: ${categoria?.nome || id}?`)) {
      this.categoriasService.excluir(id).pipe(take(1)).subscribe({
        next: () => {
          this.carregarCategorias();
          this.cd.detectChanges();
        },
        error: (error) => {
          console.error('Erro ao excluir categoria:', error);
          this.mostrarErro('Erro ao excluir categoria. Pode estar associada a outros itens.');
          this.cd.detectChanges();
        }
      });
    }
  }
  
  inativar(id: number | undefined) {
    if (!id) return;
    this.categoriasService.inativar(id).pipe(take(1)).subscribe({
      next: () => {
        this.carregarCategorias();
        this.cd.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao inativar categoria:', error);
        this.mostrarErro('Erro ao inativar categoria.');
        this.cd.detectChanges();
      }
    });
  }

  ativar(id: number | undefined) {
    if (!id) return;
    this.categoriasService.ativar(id).pipe(take(1)).subscribe({
      next: () => {
        this.carregarCategorias();
        this.cd.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao ativar categoria:', error);
        this.mostrarErro('Erro ao ativar categoria.');
        this.cd.detectChanges();
      }
    });
  }
}