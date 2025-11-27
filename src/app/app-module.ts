import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './auth/login/login';
import { Cadastro } from './auth/cadastro/cadastro';
=======

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
>>>>>>> upstream/main

@NgModule({
  declarations: [
    App,
<<<<<<< HEAD
    Login,
    Cadastro,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
=======

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> upstream/main
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule { }
>>>>>>> upstream/main
