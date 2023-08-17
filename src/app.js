import express from "express";
import db from "./config/db-connect.js";
import routes from "./routes/index.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => console.log('Conexão realizado com sucesso'));

const app = express();

app.use(express.json());

routes(app);

app.post('/livros', (req, res) => {
  livros.push(...req.body);
  res.status(201).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
  const livro = buscarLivro(Number(req.params.id));
  livros[livro].titulo = req.body.titulo;
  res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res) => {
  const livro = buscarLivro(Number(req.params.id));
  livros.splice(livro, 1);
  res.status(200).send(livros);
})

function buscarLivro(id) {
  return livros.findIndex((livro) => livro.id === id);
}


export default app;