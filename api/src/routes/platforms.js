const { Router } = require("express");
const router = Router();
const { Platforms } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const foo = async () => {
  let platformsApi = await axios
    .get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    .then((response) => {
      let platforms = response.data.results.map((item) => {
        return {
          id: item.id,
          name: item.name,
        };
      });
      return platforms;
    });
  platformsApi.map((item) => {
    let { id, name } = item;
    Platforms.create({ id, name }).catch((error) => {
      console.error(error);
    });
  });
};

foo();


router.get("/", async (req, res, next) => {

  Platforms.findAll()
    .then((allPlatforms) => {
      res.status(200).json(allPlatforms);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
