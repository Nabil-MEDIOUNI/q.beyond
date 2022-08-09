import { useState } from 'react';

import { AddWeatherCard, Typography } from '../../utils/styles';
import AddWeatherModal from './Modal';

function AddWeather({ addWeather }: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // let isModalVisible = false;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AddWeatherCard onClick={showModal}>
        <Typography>+ Add Weather</Typography>
      </AddWeatherCard>
      <AddWeatherModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        handleCancel={handleCancel}
        addWeather={addWeather}
      />
    </>
  );
}

export default AddWeather;
