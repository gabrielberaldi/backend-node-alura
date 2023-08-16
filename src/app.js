import express from "express";
import db from "./config/db-connect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => console.log('Conexão realizado com sucesso'));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Curso de node');
})

app.get('/livros', (req, res) => {
  livros.find((error, livros) => {
    res.status(200).json(livros)
  })
})

app.get('/livros/:id', (req, res) => {
  const id = req.params.id;
  livros.findById(id, (error, livro) => {
    res.status(200).json(livro);
  })
})

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