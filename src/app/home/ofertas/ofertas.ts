import { Component } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  standalone: false,
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
 produtos = [
    {
      nome: 'Galaxy S22 Ultra',
      preco: 2729,
      precoAntigo: 3000,
      desconto: 9,
      economia: 271,
      imagem: 'assets/icones/s22ultra.png'
    },
    {
      nome: 'Galaxy S22 Ultra',
      preco: 2729,
      precoAntigo: 3000,
      desconto: 9,
      economia: 271,
      imagem: 'assets/icones/s22ultra.png'
    },
    {
      nome: 'Galaxy S22 Ultra',
      preco: 2729,
      precoAntigo: 3000,
      desconto: 9,
      economia: 271,
      imagem: 'assets/icones/s22ultra.png'
    },
    {
      nome: 'Galaxy S22 Ultra',
      preco: 2729,
      precoAntigo: 3000,
      desconto: 9,
      economia: 271,
      imagem: 'assets/icones/s22ultra.png'
    },
    {
      nome: 'Galaxy S22 Ultra',
      preco: 2729,
      precoAntigo: 3000,
      desconto: 9,
      economia: 271,
      imagem: 'assets/icones/s22ultra.png'
    }
  ];
}
