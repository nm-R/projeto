import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Homelayout } from './homelayout/homelayout';
import { SharedModule } from '../shared/shared-module';
import { Banner } from './banner/banner';
import { Ofertas } from './ofertas/ofertas';


@NgModule({
  declarations: [
    Homelayout,
    Banner,
    Ofertas
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
