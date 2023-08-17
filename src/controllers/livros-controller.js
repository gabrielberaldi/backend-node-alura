import livros from "../models/Livro.js";

class LivroController {

  static obterLivros = (req, res) => {
    livros.find((error, livros) => {
      res.status(200).json(livros)
    })
  }

  static obterLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (error, livro) => {
      res.status(200).json(livro);
    })
  }

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((error) => {
      if (error) {
       res.status(500).send({message: `${error.message} - Falha ao cadastrar novo livro`});
      } else {
        res.status(201).send(livro.toJSON());
      } 
    })
  }

}

export default LivroController;