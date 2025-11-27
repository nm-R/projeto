<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../services/produto-service';
import { Produto } from '../models/produto.model';
=======
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  status: 'Ativo' | 'Inativo';
  descricao: string;
}
>>>>>>> upstream/main

@Component({
  selector: 'app-formulario-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-produtos.html',
  styleUrls: ['./formulario-produtos.css'],
})
<<<<<<< HEAD
export class FormularioProdutos implements OnInit {
  produto: Produto = {
    nome: '',
    descricao: '',
    preco: 0,
    estoque: 0,
    categoria: '',
    ativo: true
  };

  modoEdicao = false;
  carregando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}
=======
export class FormularioProdutos {
  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    status: 'Ativo',
    descricao: ''
  };

  produtosMock: Produto[] = [
    { id: 1, nome: 'Notebook Lenovo', preco: 3500, status: 'Ativo', descricao: 'Notebook ótimo para estudos.' },
    { id: 2, nome: 'Mouse Gamer', preco: 150, status: 'Ativo', descricao: 'Mouse RGB.' },
    { id: 3, nome: 'Teclado Mecânico', preco: 320, status: 'Inativo', descricao: 'Switch blue.' },
  ];

  modoEdicao = false;

  constructor(private route: ActivatedRoute) {}
>>>>>>> upstream/main

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.modoEdicao = true;
<<<<<<< HEAD
      this.carregarProduto(id);
    }
  }

  carregarProduto(id: number) {
    this.carregando = true;
    this.produtoService.obterPorId(id).subscribe({
      next: (data) => {
        this.produto = data;
        this.carregando = false;
        console.log('✅ Produto carregado:', data);
      },
      error: (error) => {
        console.error('❌ Erro ao carregar produto:', error);
        alert('Erro ao carregar produto');
        this.carregando = false;
      }
    });
  }

  salvar() {
    if (this.modoEdicao && this.produto.id) {
      // Atualizar produto existente
      this.produtoService.atualizar(this.produto.id, this.produto).subscribe({
        next: (data) => {
          console.log('✅ Produto atualizado:', data);
          alert('Produto atualizado com sucesso!');
          this.router.navigate(['/admin/produtos']);
        },
        error: (error) => {
          console.error('❌ Erro ao atualizar:', error);
          alert('Erro ao atualizar produto');
        }
      });
    } else {
      // Criar novo produto
      this.produtoService.criar(this.produto).subscribe({
        next: (data) => {
          console.log('✅ Produto criado:', data);
          alert('Produto criado com sucesso!');
          this.router.navigate(['/admin/produtos']);
        },
        error: (error) => {
          console.error('❌ Erro ao criar:', error);
          alert('Erro ao criar produto');
        }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/admin/produtos']);
  }
}
=======
      const encontrado = this.produtosMock.find(p => p.id === id);

      if (encontrado) {
        this.produto = { ...encontrado };
      }
    }
  }

  salvar() {
    if (this.modoEdicao) {
      console.log('Produto editado:', this.produto);
    } else {
      console.log('Produto criado:', this.produto);
    }
  }
}
>>>>>>> upstream/main
