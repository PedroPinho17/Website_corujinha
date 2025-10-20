# 📡 API Client - Corujinha

Este diretório contém o cliente API para comunicação com o backend da Corujinha.

## 📁 Estrutura de Arquivos

```
src/lib/
├── api.ts              # Cliente principal da API
├── api-examples.ts     # Exemplos de uso
└── README.md          # Este arquivo

src/config/
└── api.ts             # Configurações da API
```

## 🚀 Como Usar

### 1. Importar a API

```typescript
import { api } from '@/lib/api';
// ou
import { usersApi, entidadesApi, formacoesApi } from '@/lib/api';
```

### 2. Exemplos de Uso

#### Utilizadores
```typescript
// Listar todos os utilizadores
const users = await api.users.getAll();

// Criar novo utilizador
const newUser = await api.users.create({
  nome: 'João Silva',
  email: 'joao@exemplo.com',
  telefone: '123456789'
});

// Atualizar utilizador
const updatedUser = await api.users.update(1, {
  nome: 'João Santos'
});
```

#### Entidades
```typescript
// Listar todas as entidades
const entidades = await api.entidades.getAll();

// Criar nova entidade
const newEntidade = await api.entidades.create({
  nome: 'Escola Primária',
  endereco: 'Rua das Flores, 123',
  telefone: '987654321'
});
```

#### Formações
```typescript
// Listar formações ativas
const formacoes = await api.formacoes.getAtivas();

// Listar formações com limite
const formacoesLimitadas = await api.formacoes.getAtivasLimitadas(3);

// Criar nova formação
const newFormacao = await api.formacoes.create({
  titulo: 'Matemática Básica',
  descricao: 'Curso de matemática para iniciantes',
  duracao: 40,
  preco: 150,
  ativo: true
});

// Alterar status da formação
const updatedFormacao = await api.formacoes.updateStatus(1, false);
```

### 3. Verificar Status do Servidor

```typescript
import { checkServerStatus } from '@/lib/api';

const isOnline = await checkServerStatus();
console.log('Servidor online:', isOnline);
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Configuração Personalizada

Edite `src/config/api.ts` para personalizar:

```typescript
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  TIMEOUT: 10000, // 10 segundos
  RETRY_ATTEMPTS: 3,
};
```

## 📝 Tipos TypeScript

A API inclui tipos TypeScript para todas as entidades:

```typescript
interface User {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}

interface Entidade {
  id: number;
  nome: string;
  endereco?: string;
  telefone?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

interface Formacao {
  id: number;
  titulo: string;
  descricao?: string;
  duracao?: number;
  preco?: number;
  ativo: boolean;
  created_at?: string;
  updated_at?: string;
}
```

## 🎯 Hooks Personalizados

### useFormacoes Hook

```typescript
import { useFormacoes } from '@/lib/api-examples';

const MyComponent = () => {
  const { formacoes, loading, error, loadFormacoes, createFormacao } = useFormacoes();

  useEffect(() => {
    loadFormacoes();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      {formacoes.map(formacao => (
        <div key={formacao.id}>
          <h3>{formacao.titulo}</h3>
          <p>{formacao.descricao}</p>
        </div>
      ))}
    </div>
  );
};
```

## 🚨 Tratamento de Erros

A API inclui tratamento de erros automático:

```typescript
try {
  const users = await api.users.getAll();
} catch (error) {
  console.error('Erro ao carregar utilizadores:', error);
  // Tratar erro aqui
}
```

## 🔄 Retry e Timeout

A API inclui configurações de retry e timeout:

```typescript
// Configuração em src/config/api.ts
export const API_CONFIG = {
  TIMEOUT: 10000,        // 10 segundos
  RETRY_ATTEMPTS: 3,     // 3 tentativas
};
```

## 📚 Exemplos Completos

Veja `api-examples.ts` para exemplos mais detalhados de uso da API.

## 🛠️ Desenvolvimento

Para adicionar novos endpoints:

1. Adicione o endpoint em `src/config/api.ts`
2. Crie a função em `src/lib/api.ts`
3. Adicione exemplos em `src/lib/api-examples.ts`
4. Atualize este README

## 🐛 Troubleshooting

### Problemas Comuns

1. **CORS Error**: Verifique se o backend está configurado para aceitar requisições do frontend
2. **404 Error**: Verifique se o endpoint existe no backend
3. **500 Error**: Verifique os logs do backend para mais detalhes

### Debug

```typescript
// Ativar logs detalhados
console.log('API Base URL:', API_BASE_URL);
console.log('Request URL:', url);
console.log('Request Config:', config);
```
