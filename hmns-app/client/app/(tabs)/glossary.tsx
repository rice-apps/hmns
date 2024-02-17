import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, Platform, StatusBar } from 'react-native';
import CardPopup from '../../components/CardPopup/CardPopup'; 
import EditScreenInfo from '../../components/EditScreenInfo';


export default function Glossary() {
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
});
  
