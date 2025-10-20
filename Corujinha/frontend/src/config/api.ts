// Configuração da API
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
};

// Endpoints da API
export const API_ENDPOINTS = {
  USERS: '/api/users',
  ENTIDADES: '/api/entidades',
  FORMACOES: '/api/formacoes',
  HEALTH: '/',
} as const;

// Configuração de headers padrão
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const;
