import { Request, Response } from "express";
import { pool } from "../db/db";
import { Entidade } from "../models/entidadeModel";

// criar a entidade
export const createEntity = async (req: Request, res: Response) => {
    const { nome, descricao, localizacao, site } = req.body;

    try {
        const result = await pool.query(
          "INSERT INTO entidade (nome, descricao, localizacao, site) VALUES ($1, $2, $3, $4) RETURNING *",
          [nome, descricao, localizacao, site]
        );
        res.status(201).json({
          message: "✅ Entidade criada com sucesso",
          data: result.rows[0]
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar entidade" });
      }
};

// List of all entities
export const listEntities = async (req: Request, res: Response) => {
    try {
      const result = await pool.query("SELECT * FROM entidade");
      const entities: Entidade[] = result.rows;
      res.json(entities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar entidades" });
    }
  };

// Alterar dados da entidade selecionada
export const alterarEntidade = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, descricao, localizacao, site } = req.body;

  try {
    const result = await pool.query(
      "UPDATE entidade SET nome = $1, descricao = $2, localizacao = $3, site = $4 WHERE id = $5 RETURNING *",
      [nome, descricao, localizacao, site, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Entidade não encontrada" });
    }

    res.json({
      message: "✅ Entidade alterada com sucesso",
      data: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao alterar entidade" });
  }
};