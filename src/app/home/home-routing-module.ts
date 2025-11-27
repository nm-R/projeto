import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homelayout } from './homelayout/homelayout';

const routes: Routes = [
    { path: '', component: Homelayout } // quando acessar /home, mostra HomeComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
