import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { FormularioProdutos } from './formulario-produtos/formulario-produtos';

const routes: Routes = [
  { path: '', component: ListaProdutos },
  { path: 'novo', component: FormularioProdutos },
  { path: ':id', component: FormularioProdutos }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
