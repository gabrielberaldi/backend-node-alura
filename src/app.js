import express from "express";

const app = express();

app.use(express.json());

const livros = [
  {id: 1, titulo: 'Senhor dos aneis'},
  {id: 2, titulo: 'Hobbit'}
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de node');
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
  const livro = buscarLivro(Number(req.params.id));
  res.status(200).json(livros[livro]);
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