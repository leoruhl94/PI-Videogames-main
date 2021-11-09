const { Genres } = require("../db");
const { Platforms } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getGenresApi = async () => {
    let genresApi = await axios
      .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => {
        let genres = response.data.results.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        });
        return genres;
      });
    genresApi.map((item) => {
      let { id, name } = item;
      Genres.findOrCreate({ 
        where: {
          id, 
          name 
        }
      }).catch((error) => {
        console.error(error);
      });
    });
  };
  
  const getPlatformsApi = async () => {
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
      platformsApi.length && platformsApi.map(async (item) => {
      let { id, name } = item;
      await Platforms.findOrCreate({ 
          where: {
              id, 
              name 
          }
    }).catch((error) => {
        console.error(error);
      });
    });
  };
  

module.exports = {
    getGenresApi,
    getPlatformsApi,
}