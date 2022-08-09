import { useQuery } from 'react-apollo';

import { LoadingContainer, ErrorMessage, Container } from '../utils/styles';

import { SyncOutlined } from '@ant-design/icons';

import { GET_SINGLE_WEATHER } from '../apollo/queries/wheatherQueries';

function SingleWeather({ match }: any) {
  const { data, loading, error } = useQuery(GET_SINGLE_WEATHER, {
    variables: {
      id: match.params.id,
    },
    pollInterval: 10000,
  });

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

  return <Container>{data.getWeather.city}</Container>;
}

export default SingleWeather;
