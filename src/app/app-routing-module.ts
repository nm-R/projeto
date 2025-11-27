import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth-module').then(m => m.AuthModule)
  },
    {
=======
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // padrão: vai pra Home
  {
>>>>>>> upstream/main
    path: 'home',
    loadChildren: () => import('./home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
