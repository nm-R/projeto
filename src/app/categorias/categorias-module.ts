import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing-module';
import { ListaCategorias } from './lista-categorias/lista-categorias';
import { FormularioCategorias } from './formulario-categorias/formulario-categorias';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriasRoutingModule,
   
    ListaCategorias,
    FormularioCategorias
  ]
})
export class CategoriasModule {}