import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro'; 

const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'cadastro', component: Cadastro },
    
   
    { path: '', redirectTo: 'login', pathMatch: 'full' }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }