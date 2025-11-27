import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
=======
>>>>>>> upstream/main

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  // Listar todos os produtos
  listarTodos(categoria?: string): Observable<Produto[]> {
    let params = new HttpParams();
    if (categoria) {
      params = params.set('categoria', categoria);
    }
    return this.http.get<Produto[]>(this.apiUrl, { params });
  }

  // Obter produto por ID
  obterPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // Criar produto
  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // Atualizar produto
  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  // Deletar produto (soft delete)
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Buscar produtos
  buscar(consulta: string): Observable<Produto[]> {
    const params = new HttpParams().set('q', consulta);
    return this.http.get<Produto[]>(`${this.apiUrl}/buscar`, { params });
  }
}
=======
  
}
>>>>>>> upstream/main
