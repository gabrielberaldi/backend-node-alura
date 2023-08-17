import express from "express";
import livrosRoutes from "./livros-routes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"});
  })

  //Definindo quais rotas usar
  app.use(
    express.json(),
    livrosRoutes
  )
}

export default routes;

