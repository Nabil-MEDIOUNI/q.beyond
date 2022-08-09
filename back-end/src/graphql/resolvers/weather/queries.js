const fetch = require('node-fetch');

const Weather = require('../../../models/weather');

module.exports.WeatherQueries = {
  getWeather: (_, { id }) => Weather.findById(id),
  getAllWeathers: async () => {
    const allWeathers = await Weather.find({});

    for (let i = 0; i < allWeathers.length; i++) {
      const singleWeather = allWeathers[i];
      await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${singleWeather.city}&appid=b73b624979a3ffaa51d0475f04bccd85&units=metric`,
        {
          method: 'GET',
        },
      )
        .then((res) => res.json())
        .then(async (data) => {
          const findCity = await Weather.findOne({ id: singleWeather }._id);

          findCity.temp = data.main.temp;
          findCity.save();
          return findCity;
        });
    }

    return allWeathers;
  },
};
