import livros from "../models/Livro.js";

class LivroController {

  static obterLivros = (req, res) => {
    livros.find((error, livros) => {
      if (error) {
        res.status(500).send({message: `${error.message} - Falha ao encontrar livros`})
      } else {
        res.status(200).json(livros);
      }
    })
  }

  static obterLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (error, livro) => {
      if (error) {
        res.status(400).send({message: `${error.message} - Falha ao encontrar livro`})
      } else {
        res.status(200).json(livro);
      }
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

  static atualizarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, {$set: req.body}, (error) => {
      if (!error){
        res.status(200).send('Livro atualizado com sucesso.');
      } else {
        res.status(500).send({message: `${error.message} - Falha ao atualizar livro` });
      }
    })
  }

}

export default LivroController;