import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';


const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'produtos',
        loadChildren: () =>
          import('../produtos/produtos-module').then(m => m.ProdutosModule)
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('../categorias/categorias-module').then(m => m.CategoriasModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
