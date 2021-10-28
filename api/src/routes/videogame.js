const { Router } = require("express");
const router = Router();
const { Videogames, Genres } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
//Crea un videojuego en la base de datos
router.post("/", async (req, res, next) => {
  const { name, description, image, rating, release, platforms } = req.body;

  try {
    const newVideogame = await Videogames.create({
      name,
      release,
      description,
      image,
      rating,
      platforms,
    });
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
        include: [{model : Genres, attributes:['name'], through: {attributes: []} }],
      });
    //   videogame.genres = await videogame.map(item => {
    //     console.log(item.genres.name,'================')  
    //     return item.name})
    //     console.log(videogame, '================')
      res.json(videogame);
    } catch (error) {
      next(error);
    }
    //busco en db
  } else {
    //busco en api
    try {
      let search = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      //console.log(search, '___________=___')
      const {
        name,
        description,
        released,
        rating,
        platforms,
        background_image,
        genres,
      } = search.data;
      // console.log(name, description, released, rating, platforms)
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
