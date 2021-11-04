const { Router } = require("express");
const router = Router();
const { Videogames, Genres, Platforms } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");



//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
//Crea un videojuego en la base de datos
router.post("/", async (req, res, next) => {
  const { name, description, image, rating, release, platforms, genres } = req.body;

  try {
    const newVideogame = await Videogames.create({
      name,
      release,
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
