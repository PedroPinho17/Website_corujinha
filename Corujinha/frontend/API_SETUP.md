# 🚀 Configuração da API - Corujinha

## 📋 Pré-requisitos

1. **Backend rodando** na porta 5000
2. **Frontend Next.js** configurado
3. **Variáveis de ambiente** configuradas

## ⚙️ Configuração

### 1. Criar arquivo de ambiente

Crie o arquivo `.env.local` na raiz do projeto frontend:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# Outras configurações (opcional)
NEXT_PUBLIC_APP_NAME=Corujinha
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 2. Verificar configuração do backend

Certifique-se de que o backend está configurado para aceitar requisições do frontend:

```typescript
// backend/src/index.ts
import cors from 'cors';

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Adicionar porta do Next.js
  credentials: true
}));
```

### 3. Testar a conexão

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🧪 Testando a API

### 1. Teste básico

Abra o console do navegador e execute:

```javascript
// Verificar se o servidor está online
import { api } from '@/lib/api';
const isOnline = await api.checkStatus();
console.log('Servidor online:', isOnline);
```

### 2. Teste de endpoints

```javascript
// Testar utilizadores
const users = await api.users.getAll();
console.log('Utilizadores:', users);

// Testar entidades
const entidades = await api.entidades.getAll();
console.log('Entidades:', entidades);

// Testar formações
const formacoes = await api.formacoes.getAtivas();
console.log('Formações:', formacoes);
```

## 🔧 Configuração Avançada

### 1. Timeout personalizado

Edite `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  TIMEOUT: 15000, // 15 segundos
  RETRY_ATTEMPTS: 5, // 5 tentativas
};
```

### 2. Headers personalizados

```typescript
// Adicionar token de autenticação
const response = await api.users.getAll({
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### 3. Interceptadores de requisição

```typescript
// Adicionar logging automático
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  console.log(`[API] ${options.method || 'GET'} ${endpoint}`);
  // ... resto da implementação
};
```

## 🐛 Troubleshooting

### Problemas Comuns

#### 1. CORS Error
```
Access to fetch at 'http://localhost:5000/api/users' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solução:** Verificar configuração CORS no backend

#### 2. 404 Error
```
GET http://localhost:5000/api/users 404 (Not Found)
```

**Solução:** Verificar se o endpoint existe no backend

#### 3. 500 Error
```
GET http://localhost:5000/api/users 500 (Internal Server Error)
```

**Solução:** Verificar logs do backend para mais detalhes

#### 4. Network Error
```
TypeError: Failed to fetch
```

**Solução:** Verificar se o backend está rodando

### Debug

#### 1. Ativar logs detalhados

```typescript
// Em src/lib/api.ts
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  console.log('🔗 API Request:', {
    url: `${API_BASE_URL}${endpoint}`,
    method: options.method || 'GET',
    headers: options.headers,
    body: options.body
  });
  
  // ... resto da implementação
};
```

#### 2. Verificar variáveis de ambiente

```typescript
console.log('API Base URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('NODE_ENV:', process.env.NODE_ENV);
```

#### 3. Testar conectividade

```bash
# Testar se o backend responde
curl http://localhost:5000/

# Testar endpoint específico
curl http://localhost:5000/api/users
```

## 📚 Exemplos de Uso

### 1. Componente com loading e error states

```typescript
'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export default function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const result = await api.users.getAll();
      setData(result);
    } catch (err) {
      setError('Erro ao carregar dados');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.nome}</div>
      ))}
    </div>
  );
}
```

### 2. Hook personalizado

```typescript
import { useState, useEffect } from 'react';
import { api, Formacao } from '@/lib/api';

export const useFormacoes = () => {
  const [formacoes, setFormacoes] = useState<Formacao[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadFormacoes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.formacoes.getAtivas();
      setFormacoes(data);
    } catch (err) {
      setError('Erro ao carregar formações');
    } finally {
      setLoading(false);
    }
  };

  return { formacoes, loading, error, loadFormacoes };
};
```

## 🚀 Deploy

### 1. Variáveis de ambiente em produção

```env
# .env.production
NEXT_PUBLIC_API_URL=https://api.corujinha.com
```

### 2. Verificar configuração

```typescript
// Verificar se está em produção
const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

console.log('Environment:', process.env.NODE_ENV);
console.log('API URL:', apiUrl);
```

## 📞 Suporte

Se encontrar problemas:

1. Verificar logs do console
2. Verificar logs do backend
3. Testar endpoints diretamente
4. Verificar configuração CORS
5. Verificar variáveis de ambiente

---

**Nota:** Este arquivo deve ser atualizado conforme novas funcionalidades são adicionadas à API.
