CREATE TABLE entidade (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  localizacao VARCHAR(255),
  site VARCHAR(255)
);

CREATE TABLE formacao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  duracao VARCHAR(100),
  localizacao VARCHAR(255),
  ativo BOOLEAN DEFAULT true
  entidade_id UUID REFERENCES entidade(id) ON DELETE CASCADE
);

CREATE TABLE permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
);

CREATE TABLE user (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,,
  password VARCHAR(255) NOT NULL,
  permissions_id UUID REFERENCES permissions(id) ON DELETE CASCADE
);
