const { Router } = require("express");
const { validateCreateCharacters } = require("../middlewares");
const { createCharacter, deleteCharacter, getCharacters, getCharacterByid, updateCharacter } = require ("../controllers/characters")

const routes = Router();

routes.post("/characters", validateCreateCharacters, createCharacter)
routes.put("/characters/:id", updateCharacter);
routes.delete("/characters/:id", deleteCharacter);
routes.get("/characters", getCharacters);
routes.get("/characters/:id", getCharacterByid);

module.exports = routes;
