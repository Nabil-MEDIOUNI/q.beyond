const Weather = require('../../../models/weather');

module.exports.WeatherQueries = {
  getWeather: (_, { id }) => Weather.findById(id),
  getAllWeathers: () => Weather.find({}),
};
