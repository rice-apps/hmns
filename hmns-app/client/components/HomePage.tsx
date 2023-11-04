// HomePage.tsx
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CardPopup from './CardPopup'; 

const HomePage: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show Popup" onPress={toggleModal} color="#1f78b4" />
      <CardPopup visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default HomePage;
