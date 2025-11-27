import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCategorias } from './lista-categorias/lista-categorias';
import { FormularioCategorias } from './formulario-categorias/formulario-categorias';

const routes: Routes = [
  { path: '', component: ListaCategorias },
  { path: 'novo', component: FormularioCategorias },
  { path: ':id', component: FormularioCategorias },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
