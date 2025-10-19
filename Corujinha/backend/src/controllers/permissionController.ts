import { Request, Response } from "express";
import { pool } from "../db/db";
import { Permission } from "../models/permissionModel";

// Criar permissão 
export const createPermission = async (req: Request, res: Response) => {
    const { nome } = req.body;
    try {
      const result = await pool.query(
        "INSERT INTO permissions (nome) VALUES ($1) RETURNING *",
        [nome]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao criar permissão" });
    }
  };

// Listar permissões
export const listPermissions = async (req: Request, res: Response) => {
    try {
      const result = await pool.query("SELECT * FROM permissions");
      const permissions: Permission[] = result.rows;
      res.json(permissions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar permissões" });
    }
  };
