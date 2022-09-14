const { Router } = require("express");
const { createMovies, deleteMovie, getMovies, getMovieByid, updateMovie } = require ("../controllers/movies")

const routes = Router();

routes.post("/movies", createMovies);
routes.put("/movies/:id", updateMovie);
routes.delete("/movies/:id", deleteMovie);
routes.get("/movies", getMovies);
routes.get("/movies/:id", getMovieByid);

module.exports = routes;
