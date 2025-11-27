import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing-module';
import { ListaCategorias } from './lista-categorias/lista-categorias';
import { FormularioCategorias } from './formulario-categorias/formulario-categorias';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaCategorias
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoriasRoutingModule,
    FormularioCategorias // IMPORTA o standalone aqui
  ]
})
export class CategoriasModule {}


