import { Request, Response } from "express";
import { pool } from "../db/db";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";

// Criar utilizador
export const createUser = async (req: Request, res: Response) => {
  try {
    const { nome, email, password, permissions_id } = req.body;

    // Validar campos obrigatórios
    if (!nome || !email || !password || !permissions_id) {
      return res.status(400).json({ 
        error: "Todos os campos são obrigatórios: nome, email, password, permissions_id" 
      });
    }

    // Verificar se o email já existe
    const existingUser = await pool.query(
      "SELECT id FROM user WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: "Email já está em uso" });
    }

    // Hash da password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Inserir utilizador
    const result = await pool.query(
      "INSERT INTO user (nome, email, password, permissions_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, email, hashedPassword, permissions_id]
    );

    const newUser = result.rows[0];
    // Remover password da resposta
    delete newUser.password;

    res.status(201).json({
      message: "Utilizador criado com sucesso",
      user: newUser
    });
  } catch (error) {
    console.error("Erro ao criar utilizador:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Listar todos os utilizadores
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT u.id, u.nome, u.email, u.permissions_id, p.nome as permission_name
      FROM user u
      LEFT JOIN permissions p ON u.permissions_id = p.id
      ORDER BY u.nome
    `);

    res.status(200).json({
      message: "Utilizadores listados com sucesso",
      users: result.rows
    });
  } catch (error) {
    console.error("Erro ao listar utilizadores:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Obter utilizador por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await pool.query(`
      SELECT u.id, u.nome, u.email, u.permissions_id, p.nome as permission_name
      FROM user u
      LEFT JOIN permissions p ON u.permissions_id = p.id
      WHERE u.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Utilizador não encontrado" });
    }

    res.status(200).json({
      message: "Utilizador encontrado",
      user: result.rows[0]
    });
  } catch (error) {
    console.error("Erro ao obter utilizador:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Atualizar utilizador
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, email, password, permissions_id } = req.body;

    // Verificar se o utilizador existe
    const existingUser = await pool.query(
      "SELECT id FROM user WHERE id = $1",
      [id]
    );

    if (existingUser.rows.length === 0) {
      return res.status(404).json({ error: "Utilizador não encontrado" });
    }

    // Verificar se o email já existe (se estiver a ser alterado)
    if (email) {
      const emailCheck = await pool.query(
        "SELECT id FROM user WHERE email = $1 AND id != $2",
        [email, id]
      );

      if (emailCheck.rows.length > 0) {
        return res.status(409).json({ error: "Email já está em uso" });
      }
    }

    // Preparar campos para atualização
    const updateFields = [];
    const updateValues = [];
    let paramCount = 1;

    if (nome) {
      updateFields.push(`nome = $${paramCount}`);
      updateValues.push(nome);
      paramCount++;
    }

    if (email) {
      updateFields.push(`email = $${paramCount}`);
      updateValues.push(email);
      paramCount++;
    }

    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updateFields.push(`password = $${paramCount}`);
      updateValues.push(hashedPassword);
      paramCount++;
    }

    if (permissions_id) {
      updateFields.push(`permissions_id = $${paramCount}`);
      updateValues.push(permissions_id);
      paramCount++;
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ error: "Nenhum campo para atualizar" });
    }

    updateValues.push(id);

    const result = await pool.query(`
      UPDATE user 
      SET ${updateFields.join(", ")}
      WHERE id = $${paramCount}
      RETURNING id, nome, email, permissions_id
    `, updateValues);

    res.status(200).json({
      message: "Utilizador atualizado com sucesso",
      user: result.rows[0]
    });
  } catch (error) {
    console.error("Erro ao atualizar utilizador:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

// Eliminar utilizador
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Verificar se o utilizador existe
    const existingUser = await pool.query(
      "SELECT id FROM user WHERE id = $1",
      [id]
    );

    if (existingUser.rows.length === 0) {
      return res.status(404).json({ error: "Utilizador não encontrado" });
    }

    // Eliminar utilizador
    await pool.query("DELETE FROM user WHERE id = $1", [id]);

    res.status(200).json({
      message: "Utilizador eliminado com sucesso"
    });
  } catch (error) {
    console.error("Erro ao eliminar utilizador:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};