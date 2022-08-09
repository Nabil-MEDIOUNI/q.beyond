const { WeatherQueries } = require('./weather/queries');
const { WeatherMutations } = require('./weather/mutations');

const resolvers = {
  Query: {
    ...WeatherQueries,
  },
  Mutation: {
    ...WeatherMutations,
  },
};

module.exports = resolvers;
