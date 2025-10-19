import { Request, Response } from "express";
import { pool } from "../db/db";
import { Formacao } from  "../models/formacaoModel";

// create formação

export const criarFormacao = async (req: Request, res: Response) => {
    const { nome, descricao, duracao, localizacao, entidade_id, ativo } = req.body
  
    try {
      await pool.query(
        "INSERT INTO formacao (nome, descricao, duracao, localizacao, entidade_id, ativo) VALUES ($1, $2, $3, $4, $5)",
        [nome, descricao, duracao, localizacao, entidade_id, ativo]
      );
      res.status(201).json({ message: "✅ Formação criada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar formação" });
    }
  };

  // Listar todas as formações (com o nome da entidade)
  export const listarFormacoes = async (req: Request, res: Response) => {
    try {
      const result = await pool.query(`
        SELECT f.*, e.nome AS entidade_nome
        FROM formacao f
        JOIN entidade e ON f.entidade_id = e.id
      `);
      const formacoes: Formacao[] = result.rows;
      res.json(formacoes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar formações" });
    }
  };

  // Listar todas as formações ativas (com o nome da entidade)
  export const listarFormacoesAtivas = async (req: Request, res: Response) => {
    try {
      const result = await pool.query(`
        SELECT f.*, e.nome AS entidade_nome
        FROM formacao f
        JOIN entidade e ON f.entidade_id = e.id
        WHERE f.ativo = true
      `);
      const formacoes: Formacao[] = result.rows;
      res.json(formacoes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar formações ativas" });
    }
  };

    // Listar apenas 2 ou 3 as formações ativas (com o nome da entidade)
    export const listarFormacoesAtivasLimitadas = async (req: Request, res: Response) => {
      try {
        const requestedLimit = req.query.limit ? Number(req.query.limit) : 3;
        // Garante um limite válido (fallback para 3, e permite 2 ou 3 usualmente)
        const limit = Number.isFinite(requestedLimit) && requestedLimit > 0
          ? Math.round(requestedLimit)
          : 3;

        const result = await pool.query(
          `
          SELECT f.*, e.nome AS entidade_nome
          FROM formacao f
          JOIN entidade e ON f.entidade_id = e.id
          WHERE f.ativo = true
          LIMIT $1
          `,
          [limit]
        );
        const formacoes: Formacao[] = result.rows;
        res.json(formacoes);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao buscar formações ativas limitadas" });
      }
    };


  // Alterar os dados da formação selecionada 
  export const alterarFormacao = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, descricao, duracao, localizacao, entidade_id, ativo } = req.body;

    try {
      const result = await pool.query(
        "UPDATE formacao SET nome = $1, descricao = $2, duracao = $3, localizacao = $4, entidade_id = $5, ativo = $6 WHERE id = $7 RETURNING *",
        [nome, descricao, duracao, localizacao, entidade_id, ativo, id]
      );
      
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Formação não encontrada" });
      }

      res.json({
        message: "✅ Formação alterada com sucesso",
        data: result.rows[0]
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao alterar formação" });
    }
  };

  // Alterar apenas o campo ativo na formação selecionada
  export const alterarStatusFormacao = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ativo } = req.body;

    try {
      const result = await pool.query(
        "UPDATE formacao SET ativo = $1 WHERE id = $2 RETURNING *",
        [ativo, id]
      );
      
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Formação não encontrada" });
      }

      res.json({
        message: `✅ Status da formação alterado para ${ativo ? 'ativo' : 'inativo'}`,
        data: result.rows[0]
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao alterar status da formação" });
    }
  };
  