import { useState } from 'react';

import { Input, Modal } from 'antd';

import { ModalProps } from '../../interfaces';

function AddWeatherModal(props: ModalProps) {
  const [city, setCity] = useState('');

  const onSearchInputChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleOk = () => {
    props
      .addWeather({
        variables: {
          weather: {
            city,
          },
        },
      })
      .then(() => {
        props.setIsModalVisible(false);
        setCity('');
      });
  };

  return (
    <Modal
      title="Stadt auswahlen"
      cancelText="Abbruch"
      visible={props.isModalVisible}
      onOk={handleOk}
      onCancel={props.handleCancel}
    >
      <Input
        value={city}
        onChange={onSearchInputChange}
        placeholder="Enter city"
      />
    </Modal>
  );
}

export default AddWeatherModal;
