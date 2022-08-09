import { gql } from 'apollo-boost';

export const ADD_WEATHER = gql`
  mutation addWeather($weather: WeatherInput) {
    addWeather(weather: $weather) {
      id
    }
  }
`;
