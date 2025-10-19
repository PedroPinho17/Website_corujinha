import express from 'express';
import {createEntity, listEntities, alterarEntidade} from "../controllers/entidadeController";

const router = express.Router();

// Listar entidades
router.get('/', listEntities);
// Criar nova entidade
router.post('/', createEntity);

// Atualizar entidade
router.put('/:id', alterarEntidade);
  
export default router;