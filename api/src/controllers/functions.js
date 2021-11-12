const { Genres } = require("../db");
const { Platforms } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getPlatformsApi = () => {
  axios
    .get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    .then((response) => {
      for (const platforms of response.data.results) {
        Platforms.findOrCreate({
          where: { id: platforms.id, name: platforms.name },
        });
      }
    });
};

const getGenresApi = async () => {
  try {
    let genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    for (const genre of genresApi.data.results) {
      await Genres.findOrCreate({
        where: { id: genre.id, name: genre.name },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getGenresApi,
  getPlatformsApi,
};
