import express from 'express';
import {listarFormacoes, criarFormacao, listarFormacoesAtivas, alterarFormacao, alterarStatusFormacao, listarFormacoesAtivasLimitadas} from "../controllers/formacaoController";

const router = express.Router();

// GET - listar todas as formações
router.get('/', listarFormacoes);

// GET - Listar apenas as formações ativas
router.get('/ativas', listarFormacoesAtivas);

// GET - Listar formações ativas com limite (usar query ?limit=2|3)
router.get('/ativas/limitadas', listarFormacoesAtivasLimitadas);

// POST - criar uma nova formação
router.post('/', criarFormacao);

// PUT - alterar os dados da formação selecionada
router.put('/:id', alterarFormacao);

// PATCH - alterar apenas o status ativo da formação selecionada
router.patch('/:id/status', alterarStatusFormacao);

export default router;