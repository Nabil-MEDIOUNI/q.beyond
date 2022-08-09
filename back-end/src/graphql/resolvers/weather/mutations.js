const fetch = require('node-fetch');
const { getArgumentInput, capitalizeFirstLetter } = require('../../../helpers');

const Weather = require('../../../models/weather');

module.exports.WeatherMutations = {
  addWeather: async (_, weather) => {
    const { city } = getArgumentInput(weather).weather;
    const getWheatherByCity = await Weather.find({
      city: capitalizeFirstLetter(city),
    });

    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b73b624979a3ffaa51d0475f04bccd85&units=metric`,
      {
        method: 'GET',
      },
    )
      .then((res) => res.json())
      .then(async (data) => {
        if (getWheatherByCity.length > 0) {
          const findCity = await Weather.findOne({ id: getWheatherByCity }._id);

          findCity.temp = data.main.temp;
          findCity.save();

          return findCity;
        }

        const result = await new Weather({
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
        }).save();

        return result;
      });

    return data;
  },
};
