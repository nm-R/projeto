import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/clientes';
  private currentUserSubject = new BehaviorSubject<Cliente | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {

    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  login(email: string, senha: string): Observable<Cliente> {
    const credenciais = { email, senha };

    return this.http.post<Cliente>(`${this.apiUrl}/login`, credenciais)
      .pipe(
        tap(user => {
   
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return throwError(() => ({
              status: 401,
              message: 'Email ou senha inválidos'
            }));
          }
          return throwError(() => error);
        })
      );
  }


  registrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/registrar`, cliente)
      .pipe(
        tap(user => {
       
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            return throwError(() => ({
              status: 409,
              message: 'Este email já está cadastrado'
            }));
          }
          return throwError(() => error);
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): Cliente | null {
    return this.currentUserSubject.value;
  }
}