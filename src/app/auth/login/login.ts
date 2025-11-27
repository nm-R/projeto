import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-login',
  standalone: false, 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login { 
  email = '';
  senha = '';
  erro = '';
  carregando = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef 
  ) {}

  login() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha email e senha';
      this.cd.detectChanges();
      return;
    }

    if (this.email === 'admin' && this.senha === 'admin') {
      console.log('Login de Administrador realizado!');
      this.router.navigate(['/admin']); 
      return; 
    }
    
    this.carregando = true;
    this.erro = '';
    this.cd.detectChanges(); 

    
    this.authService.login(this.email, this.senha).subscribe({
      next: (cliente) => {
        if (cliente) {
          console.log('Login de cliente realizado!');
          this.router.navigate(['/home']);
        } else {
          this.erro = 'Email ou senha inválidos';
          this.carregando = false;
          this.cd.detectChanges(); 
        }
      },
      error: (error) => {
        console.error('Erro no login:', error);
        this.erro = 'Erro ao fazer login. Tente novamente.';
        this.carregando = false;
        this.cd.detectChanges(); 
      }
    });
  }
}