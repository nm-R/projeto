import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../models/cliente.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro { 
  cliente: Cliente = { 
    nome: '', 
    sobrenome: '', 
    email: '',
    telefone: '', 
    cep: '',
    endereco: '',
    cidade: '',
    estado: '',
    pais: 'Brasil'
  };
  
  senha = ''; 
  confirmarSenha = ''; 
  erro: string | null = null;
  carregando = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private cd: ChangeDetectorRef 
  ) {}

  buscarCep() {
    const cepLimpo = this.cliente.cep!.replace(/\D/g, ''); 

    if (cepLimpo.length === 8) {
      this.carregando = true;
      this.erro = null;
      this.cd.detectChanges();

      const viaCepUrl = `https://viacep.com.br/ws/${cepLimpo}/json/`;

      this.http.get<any>(viaCepUrl).subscribe({
        next: (dados) => {
          if (!dados.erro) {
            this.cliente.endereco = dados.logradouro;
            this.cliente.cidade = dados.localidade;
            this.cliente.estado = dados.uf;
            this.cliente.pais = 'Brasil';
          } else {
            this.erro = 'CEP não encontrado.';
          }
          this.carregando = false;
          this.cd.detectChanges();
        },
        error: (err) => {
          this.erro = 'Erro ao consultar o CEP. Verifique sua conexão.';
          this.carregando = false;
          this.cd.detectChanges();
          console.error('Erro ViaCEP:', err);
        }
      });
    }
  }

  cadastrar() {
    this.carregando = true;
    this.erro = null;
    this.cd.detectChanges();

    if (!this.cliente.nome || !this.cliente.sobrenome || !this.cliente.email || !this.senha || !this.confirmarSenha) {
        this.erro = 'Por favor, preencha todos os campos obrigatórios.';
        this.carregando = false;
        this.cd.detectChanges();
        return;
    }
    
    if (this.senha !== this.confirmarSenha) {
        this.erro = 'A senha e a confirmação de senha não coincidem.';
        this.carregando = false;
        this.cd.detectChanges();
        return;
    }

    const payload: Cliente = { 
      ...this.cliente, 
      senha: this.senha, 
    };

    this.authService.registrar(payload).subscribe({
      next: (response) => {
        this.router.navigate(['/home']); 
      },
      error: (err) => {
        this.carregando = false;
        if (err.status === 409) {
          this.erro = 'Este email já está cadastrado.';
        } else {
          this.erro = 'Ocorreu um erro durante o cadastro. Tente novamente.';
        }
        this.cd.detectChanges();
        console.error('Erro de cadastro:', err);
      }
    });
  }
}