export interface Produto {
  id?: number;
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
  categoria: string;
  ativo?: boolean;
  urlImagem?: any;
  criadoEm?: string;
  atualizadoEm?: string;
}