const { Router } = require('express');
const genres = require('./genres');
const videogame = require('./videogame');
const videogames = require('./videogames');


const router = Router();
 
router.use('/genres', genres);
router.use('/videogame', videogame);
router.use('/videogames', videogames);


module.exports = router;
