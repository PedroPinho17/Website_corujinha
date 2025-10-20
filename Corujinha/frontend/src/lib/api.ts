import { API_CONFIG, API_ENDPOINTS, DEFAULT_HEADERS } from '../config/api';

// Configuração da API
const API_BASE_URL = API_CONFIG.BASE_URL;

// Tipos TypeScript para as entidades
export interface User {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Entidade {
  id: number;
  nome: string;
  endereco?: string;
  telefone?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Formacao {
  id: number;
  titulo: string;
  descricao?: string;
  duracao?: number;
  preco?: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}

// Função genérica para fazer requisições
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      ...DEFAULT_HEADERS,
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// ==================== USERS API ====================

export const usersApi = {
  // Listar todos os utilizadores
  getAll: (): Promise<User[]> => 
    apiRequest<User[]>(API_ENDPOINTS.USERS),

  // Obter utilizador por ID
  getById: (id: number): Promise<User> => 
    apiRequest<User>(`${API_ENDPOINTS.USERS}/${id}`),

  // Criar novo utilizador
  create: (userData: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> => 
    apiRequest<User>(API_ENDPOINTS.USERS, {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  // Atualizar utilizador
  update: (id: number, userData: Partial<User>): Promise<User> => 
    apiRequest<User>(`${API_ENDPOINTS.USERS}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    }),

  // Eliminar utilizador
  delete: (id: number): Promise<void> => 
    apiRequest<void>(`${API_ENDPOINTS.USERS}/${id}`, {
      method: 'DELETE',
    }),
};

// ==================== ENTIDADES API ====================

export const entidadesApi = {
  // Listar todas as entidades
  getAll: (): Promise<Entidade[]> => 
    apiRequest<Entidade[]>(API_ENDPOINTS.ENTIDADES),

  // Criar nova entidade
  create: (entidadeData: Omit<Entidade, 'id' | 'created_at' | 'updated_at'>): Promise<Entidade> => 
    apiRequest<Entidade>(API_ENDPOINTS.ENTIDADES, {
      method: 'POST',
      body: JSON.stringify(entidadeData),
    }),

  // Atualizar entidade
  update: (id: number, entidadeData: Partial<Entidade>): Promise<Entidade> => 
    apiRequest<Entidade>(`${API_ENDPOINTS.ENTIDADES}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(entidadeData),
    }),
};

// ==================== FORMAÇÕES API ====================

export const formacoesApi = {
  // Listar todas as formações
  getAll: (): Promise<Formacao[]> => 
    apiRequest<Formacao[]>(API_ENDPOINTS.FORMACOES),

  // Listar apenas formações ativas
  getAtivas: (): Promise<Formacao[]> => 
    apiRequest<Formacao[]>(`${API_ENDPOINTS.FORMACOES}/ativas`),

  // Listar formações ativas com limite
  getAtivasLimitadas: (limit: number = 3): Promise<Formacao[]> => 
    apiRequest<Formacao[]>(`${API_ENDPOINTS.FORMACOES}/ativas/limitadas?limit=${limit}`),

  // Criar nova formação
  create: (formacaoData: Omit<Formacao, 'id' | 'created_at' | 'updated_at'>): Promise<Formacao> => 
    apiRequest<Formacao>(API_ENDPOINTS.FORMACOES, {
      method: 'POST',
      body: JSON.stringify(formacaoData),
    }),

  // Atualizar formação
  update: (id: number, formacaoData: Partial<Formacao>): Promise<Formacao> => 
    apiRequest<Formacao>(`${API_ENDPOINTS.FORMACOES}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(formacaoData),
    }),

  // Alterar status da formação (ativo/inativo)
  updateStatus: (id: number, ativo: boolean): Promise<Formacao> => 
    apiRequest<Formacao>(`${API_ENDPOINTS.FORMACOES}/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ ativo }),
    }),
};

// ==================== UTILITÁRIOS ====================

// Verificar se o servidor está online
export const checkServerStatus = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.HEALTH}`);
    return response.ok;
  } catch {
    return false;
  }
};

// Exportar todas as APIs como um objeto
export const api = {
  users: usersApi,
  entidades: entidadesApi,
  formacoes: formacoesApi,
  checkStatus: checkServerStatus,
};

export default api;
