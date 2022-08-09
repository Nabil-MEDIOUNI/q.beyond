import { gql } from 'apollo-boost';

export const GET_WEATHERS = gql`
  query getAllWeathers {
    getAllWeathers {
      id
      city
      temp
      icon
    }
  }
`;

export const GET_SINGLE_WEATHER = gql`
  query getWeather($id: ID!) {
    getWeather(id: $id) {
      id
      city
      temp
      icon
    }
  }
`;
