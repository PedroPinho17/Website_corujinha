import { Router } from "express";
import { pool } from "../index";


const router = Router();

// GET - listar todas as formações
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM formacoes");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar formações" });
  }
});

// POST - criar uma nova formação
router.post("/", async (req, res) => {
  const { nome, descricao, duracao_horas } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO formacoes (nome, descricao, duracao_horas) VALUES ($1, $2, $3) RETURNING *",
      [nome, descricao, duracao_horas]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar formação" });
  }
});

export default router;