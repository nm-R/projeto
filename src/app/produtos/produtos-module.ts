import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { FormularioProdutos } from './formulario-produtos/formulario-produtos';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaProdutos },
  {
    path: 'novo',
    loadComponent: () =>
      import('./formulario-produtos/formulario-produtos').then(m => m.FormularioProdutos)
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./formulario-produtos/formulario-produtos').then(m => m.FormularioProdutos)
  }
];

@NgModule({
  declarations: [
    ListaProdutos
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule,
    FormularioProdutos 
  ]
})
export class ProdutosModule { }
