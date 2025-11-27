export interface Cliente {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha?: string;
    telefone?: string;
    endereco?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
    pais?: string;
    ativo?: boolean;
    criadoEm?: string;
    atualizadoEm?: string;
}

export interface LoginRequest {
    email: string;
    senha: string;
}

export interface AuthResponse {
    token: string;
    cliente: Cliente;
}