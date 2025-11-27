<<<<<<< HEAD
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { ProdutoService } from '../services/produto-service';
import { Produto } from '../models/produto.model';
import { finalize, timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
=======
import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  status: 'Ativo' | 'Inativo';
  descricao: string;   // <-- NOVO
}
>>>>>>> upstream/main

@Component({
  selector: 'app-lista-produtos',
  standalone: false,
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
<<<<<<< HEAD
export class ListaProdutos implements OnInit {
  produtos: Produto[] = []; 
  carregando = false;
  erro = '';

  constructor(
    private produtoService: ProdutoService,
    private changeDetectorRef: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.carregando = true;
    this.erro = ''; 
    
    this.changeDetectorRef.detectChanges(); 

    this.produtoService.listarTodos().pipe(
      timeout(5000), 
      catchError((err) => {
        if (err.name === 'TimeoutError') {
          this.erro = 'A conexão com o servidor expirou (5s). O backend pode estar lento ou desligado.';
        } else {
          this.erro = 'Erro ao carregar produtos. Verifique se o backend está rodando.';
        }
        
        this.changeDetectorRef.detectChanges(); 
        return throwError(() => err); 
      }),
      finalize(() => {
        this.carregando = false; 
        
        this.changeDetectorRef.detectChanges(); 
      })
    ).subscribe({
      next: (data) => {

        this.produtos = data.filter(p => p.ativo !== false); 
        console.log(' Produtos carregados com sucesso:', this.produtos);
      },
      error: (error) => {
        console.error(' Erro completo no carregamento:', error);
      }
    });
  }


  excluir(id: number) {
    if (confirm('ATENÇÃO: Tem certeza que deseja permanentemente este produto? ')) {
      
      this.produtoService.deletar(id).subscribe({
        next: () => {
          console.log(` Produto com ID ${id} excluído FISICAMENTE do DB.`);
          
     
          this.produtos = this.produtos.filter(p => p.id !== id);
          
    
          this.changeDetectorRef.detectChanges();

          alert('Produto excluído permanentemente!');
        },
        error: (error) => {
          console.error(' Erro ao tentar excluir fisicamente:', error);
          alert('Falha na exclusão física. Verifique o console e a configuração do backend.');
        }
      });
    }
  }
}
=======
export class ListaProdutos {
produtos: Produto[] = [
  { id: 1, nome: 'Notebook Lenovo', preco: 3500, status: 'Ativo', descricao: 'Notebook ótimo para estudos.' },
  { id: 2, nome: 'Mouse Gamer', preco: 150, status: 'Ativo', descricao: 'Mouse com RGB e 2400 DPI.' },
  { id: 3, nome: 'Teclado Mecânico', preco: 320, status: 'Inativo', descricao: 'Switch blue, barulhento.' },
];
  excluir(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
>>>>>>> upstream/main
