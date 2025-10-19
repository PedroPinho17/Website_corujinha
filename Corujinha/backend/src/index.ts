import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import entidadeRoutes from "./routes/entidadeRoutes";
import formacaoRoutes from "./routes/formacaoRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware para ler JSON do body
app.use(express.json());
app.use(cors());


// Rotas
app.get("/", (req, res) => {
  res.send("Servidor da Corujinha está a funcionar 🦉");
});
app.use("/api/entidades", entidadeRoutes);
app.use("/api/formacoes", formacaoRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => 
  console.log(`🚀 Servidor a correr na porta ${port}`)
);
