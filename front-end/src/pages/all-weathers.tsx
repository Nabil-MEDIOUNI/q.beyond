import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useHistory } from 'react-router-dom';

import AddWeather from '../components/AddWeather';

import {
  CardsContainer,
  Card,
  CardImage,
  CardTitle,
  Typography,
  LoadingContainer,
  ErrorMessage,
  Divider,
  CardContentontainer,
  CardContent,
  Container,
} from '../utils/styles';

import { SyncOutlined } from '@ant-design/icons';

import { GET_WEATHERS } from '../apollo/queries/wheatherQueries';
import { ADD_WEATHER } from '../apollo/mutations/weather';

import { CardInterface } from '../interfaces/index';

function AllWeathers() {
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_WEATHERS, {
    pollInterval: 10000,
  });
  console.log(loading);
  const [addWeather] = useMutation(ADD_WEATHER, {
    refetchQueries: [{ query: GET_WEATHERS }],
  });

  useEffect(() => {}, []);

  const days = [
    '-',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  if (loading) {
    return (
      <LoadingContainer>
        <SyncOutlined spin />
      </LoadingContainer>
    );
  }

  if (error) {
    return <ErrorMessage>Error Occured!</ErrorMessage>;
  }

  return (
    <Container>
      <CardsContainer>
        {data?.getAllWeathers?.map((card: CardInterface) => (
          <Card
            onClick={() => history.push(`/weathers/${card.id}`)}
            key={card.id}
          >
            <CardTitle>{card.city}</CardTitle>
            <CardContent>
              <CardImage src={`/assets/images/${card.icon}.png`} alt="" />
              <CardContentontainer>
                <Typography>{`${
                  days[new Date().getDay()]
                } ${new Date().getDay()}.${new Date().getDate()}.${new Date().getFullYear()}`}</Typography>
                <Divider />
                <Typography>{card.temp}°C</Typography>
              </CardContentontainer>
            </CardContent>
          </Card>
        ))}
        <AddWeather addWeather={addWeather} />
      </CardsContainer>
    </Container>
  );
}

export default AllWeathers;
