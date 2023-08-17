import express from "express";
import LivroController from '../controllers/livros-controller.js';

//Definindo as operações na rota '/livros'
const router = express.Router();

//Método recebe o nome do recurso e ação a se realizar a partir da controller.
//Como o método foi definido como static, não há necessicade de criar uma instância da classe.
router.get("/livros", LivroController.obterLivros);
router.get("/livros/:id", LivroController.obterLivroPorId);
router.post("/livros", LivroController.cadastrarLivro);

export default router;