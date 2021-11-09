const { Router } = require("express");
const router = Router();
const { Platforms } = require("../db");

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
