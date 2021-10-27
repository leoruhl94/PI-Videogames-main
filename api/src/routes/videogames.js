const { Router } = require('express');
const router = Router();
const {Videogames} = require('../db')

//Obtener un listado de los videojuegos
//Debe devolver solo los datos necesarios para la ruta principal
//query: Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
//Si no existe ningún videojuego mostrar un mensaje adecuado
router.get('/', (req, res, next) => {
    const { name } = req.query;
    return Videogames.findAll()
    .then((videogames) => {
        res.json(videogames)
    })
});

module.exports = router;
