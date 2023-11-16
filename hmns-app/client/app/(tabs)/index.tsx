// TabOneScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text } from '../../components/Themed';
import CardPopup from '../../components/CardPopup'; 

export default function TabOneScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button title="Show Popup" onPress={toggleModal} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      <CardPopup visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
	header: {
		alignItems: "center",
		justifyContent: "center",
		flex: 0.45,
	},
	camera: {
		flex: 1, 
	},
});
  
