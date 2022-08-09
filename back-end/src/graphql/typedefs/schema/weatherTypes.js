const { gql } = require('apollo-server-express');

module.exports.WeatherTypes = gql`
  type Weather {
    id: ID
    city: String
    temp: Float
    icon: String
  }

  input WeatherInput {
    city: String
  }
`;
