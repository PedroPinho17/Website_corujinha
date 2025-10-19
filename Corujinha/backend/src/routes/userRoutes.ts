import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController";

const router = Router();

// Rotas para utilizadores
router.post("/", createUser);           // Criar utilizador
router.get("/", getAllUsers);           // Listar todos os utilizadores
router.get("/:id", getUserById);        // Obter utilizador por ID
router.put("/:id", updateUser);         // Atualizar utilizador
router.delete("/:id", deleteUser);      // Eliminar utilizador

export default router;

