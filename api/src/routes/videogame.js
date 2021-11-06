const { Router } = require("express");
const router = Router();
const { Videogames, Genres, Platforms } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");
const { validateText, validateNumber, validateArray, validateUrl, validateDate} = require("../controllers/validations");



//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
//Crea un videojuego en la base de datos
router.post("/", async (req, res, next) => {
  const { name, description, image, rating, released, platforms, genres } = req.body;
  let error = [];

  !validateText(name) ? error = [...error, { input: "name", err: "name no puede estar vacio y debe ser tipo string"}] : error = [...error];
  !validateNumber(rating,0,5)? error = [...error, {input: "rating", err:" rating no puede estar vacio y debe ser un numero entre 0 y 5"}] : error = [...error];
  !validateDate(released)? error = [...error, {input: "released", err:"no es una fecha valida"}] : error = [...error];
  !validateText(description)? error = [...error, {input: "description", err:"description no puede estar vacio y debe ser tipo string"}] : error = [...error];
  !validateUrl(image)? error = [...error, {input: "image", err:"image no puede estar vacio y debe ser una url valida"}] : error = [...error];
  !validateArray(genres, "number")? error = [...error, {input: "genres", err:"genres debe ser un array de numeros y contener al menos 1 elemento"}] : error = [...error];
  !validateArray(platforms, "number")? error = [...error, {input: "platforms", err:"platforms debe ser un array de numeros y contener al menos 1 elemento"}] : error = [...error];

 
  if(error.length) return res.status(400).json(error); 

  try {
    const newVideogame = await Videogames.create({
      name,
      released,
      description,
      image,
      rating,
    });
    await newVideogame.addGenres(genres)
    await newVideogame.addPlatforms(platforms)

    res.status(201).json(newVideogame);
  } catch (error) {
    next(error);
  }
});
 

//Obtener el detalle de un videojuego en particular
//Debe traer solo los datos pedidos en la ruta de detalle de videojuego
//Incluir los géneros asociados
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (typeof id === "string" && id.length > 8) {
    try {
      let videogame = await Videogames.findOne({
        where: { id },
        include: [{model : Genres, attributes:['name'], through: {attributes: []}},
        {model : Platforms, attributes:['name'], through: {attributes: []} }],
      });
      res.json({
        name: videogame.name,
        description: videogame.description,
        released: videogame.released,
        rating: videogame.rating,
        image: videogame.image,
        platforms: videogame.platforms.map((item) => item.name),
        genres: videogame.genres.map((item) => item.name),
      });
    } catch (error) {
      next(error);
    }
  } else {
    try {
      let search = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      const {
        name,
        description,
        released,
        rating,
        platforms,
        background_image,
        genres,
      } = search.data;
      res.json({
        name,
        description,
        released,
        rating,
        image: background_image,
        platforms: platforms.map((item) => item.platform.name),
        genres: genres.map((item) => item.name),
      });
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;
