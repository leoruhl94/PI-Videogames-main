const { Router } = require('express');
const router = Router();
const { Videogames } = require('../db')


//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
//Crea un videojuego en la base de datos
router.post('/', async (req, res, next) => {
    const { name, description, image, rating, release } = req.body
  //  console.log(req.body)
    const newVideogame = await Videogames.create({
        name, 
        release,
        description,
        image,
        rating, 

    })
    res.json({msj: 'entre a: /videogame'})
   
});

//Obtener el detalle de un videojuego en particular
//Debe traer solo los datos pedidos en la ruta de detalle de videojuego
//Incluir los géneros asociados
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.json({msj: 'entre a: /videogame/:id'})
});    


module.exports = router;
