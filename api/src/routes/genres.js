const { Router } = require("express");
const router = Router();
const { Genres } = require("../db");
// const axios = require("axios");
// const { API_KEY } = process.env;

// const foo = async () => {
//   let genresApi = await axios
//     .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
//     .then((response) => {
//       let genres = response.data.results.map((item) => {
//         return {
//           id: item.id,
//           name: item.name,
//         };
//       });
//       return genres;
//     });
//   genresApi.map((item) => {
//     let { id, name } = item;
//     Genres.create({ id, name }).catch((error) => {
//       console.error(error);
//     });
//   });
// };

// foo();

//Obtener todos los tipos de géneros de videojuegos posibles
//En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
// router.post("/", (req, res, next) => {
//   const { id, name } = req.body;
//   Genres.create({ id, name })
//     .then((newGenre) => {
//       res.status(201).json(newGenre);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.get("/", async (req, res, next) => {
  const { genre } = req.body;

  Genres.findAll()
    .then((allGenres) => {
      res.status(200).json(allGenres);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
