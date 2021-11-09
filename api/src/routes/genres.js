const { Router } = require("express");
const router = Router();
const { Genres } = require("../db");

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
