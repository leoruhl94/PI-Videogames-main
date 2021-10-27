const { Router } = require('express');
const router = Router();
 

//Obtener todos los tipos de géneros de videojuegos posibles
//En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
router.get('/', (req, res, next) => {
    const { genre } = req.body;
    res.json({msj: 'entre a: /genres'})
});


module.exports = router;
