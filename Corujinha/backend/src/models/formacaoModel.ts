export interface Formacao {
  id: string;
  nome: string;
  descricao?: string;
  duracao?: string;
  localizacao?: string;
  entidade_id: string; // FK para Entidade
  ativo: boolean;
}