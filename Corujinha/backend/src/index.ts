import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";
import formacaoRoutes from "../src/routes/formacaoRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware para ler JSON do body
app.use(express.json());
app.use(cors());

// Conexão à base de dados
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.connect()
  .then(() => console.log("✅ Ligado ao PostgreSQL"))
  .catch(err => console.error("❌ Erro ao conectar à base de dados:", err));

// Rotas
app.get("/", (req, res) => {
  res.send("Servidor da Corujinha está a funcionar 🦉");
});
app.use("/api/formacoes", formacaoRoutes);

// Rota de teste à base de dados
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
});

app.listen(port, () => console.log(`🚀 Servidor a correr na porta ${port}`));
