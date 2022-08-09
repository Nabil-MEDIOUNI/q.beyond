const { gql } = require('apollo-server-express');

module.exports.allTypeDefs = gql`
  type Query {
    getWeather(id: ID!): Weather
    getAllWeathers: [Weather]
  }

  type Mutation {
    addWeather(weather: WeatherInput): Weather
  }
`;
