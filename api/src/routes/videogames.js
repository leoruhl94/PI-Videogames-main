const { Router } = require('express');
const router = Router();
const axios = require('axios') 
const { Videogames, Genres } = require('../db')
const { API_KEY } = process.env;

//Obtener un listado de los videojuegos
//Debe devolver solo los datos necesarios para la ruta principal
//query: Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
//Si no existe ningún videojuego mostrar un mensaje adecuado


router.get('/', (req, res, next) => {
    const { name } = req.query;
    let vgApi_1 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${1}`);
    let vgApi_2 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${2}`);
    let vgApi_3 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${3}`);
    let vgApi_4 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${4}`);
    let vgApi_5 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${5}`);
    // let vgApi_search = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
    let videogamesDb = Videogames.findAll({ include: Genres,});
    // let findGamesDb = Videogames.findAll({ include: Genres, where:{ name: {
    //     [Op.iLike]: "%" + name + "%"
    // }}});
   
    if(name){
        let gamesFilteredApi = []
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
        .then((response) => {
            gamesFilteredApi = response.data.results.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    rating: item.rating,
                    image: item.background_image || item.image,
                    genres: item.genres?.map(x => x.name)
                }
            })
            res.json(gamesFilteredApi)
        })
        .catch((error) => {
            next(error);
        })

    } else {
        Promise.all([vgApi_1, vgApi_2, vgApi_3, vgApi_4, vgApi_5, videogamesDb])
        .then((response) => {
            const gamesApi = [];
            response.map(item => item.data? gamesApi.push(...item.data.results): gamesApi.push(...item))
            const videogamesFilteredApi = gamesApi.map(item=> {
                return{
                    id: item.id,
                    name: item.name,
                    rating: item.rating,
                    image: item.background_image || item.image,
                    genres: item.genres?.map(x => x.name)
                // platforms: item.platforms?.map(x => x.platform ? x.platform?.name : x)
                }
            })
        console.log(videogamesFilteredApi.length, '=====', gamesApi.length, '=====', response.length)
    
            res.json(videogamesFilteredApi)
        })
        .catch((error) => {
            next(error);
        })
    }
});

router.post('/:videogameId/genre/:genreId', async (req, res, next) => {
    try {
        const { videogameId, genreId } = req.params;
        const videogame = await Videogames.findByPk(videogameId)
        await videogame.addGenres(genreId)
        res.sendStatus(200)

    } catch (error) {
        next(error);
    }
})

module.exports = router;
