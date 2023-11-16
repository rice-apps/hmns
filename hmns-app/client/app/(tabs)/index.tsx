// TabOneScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text } from '../../components/Themed';
import CardPopup from '../../components/CardPopup'; // Adjust the import path as needed

export default function TabOneScreen() {
<<<<<<< HEAD
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
=======
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Tab One</Text>
				<View
					style={styles.separator}
					lightColor='#eee'
					darkColor='rgba(255,255,255,0.1)'
				/>
				<EditScreenInfo path='app/(tabs)/index.tsx' />
			</View>
		</View>
	);
>>>>>>> develop
}
  
const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
	container: {
		flex: 1,
	},
	header: {
		alignItems: "center",
		justifyContent: "center",
		// Adjust the flex value or height as needed
		flex: 0.45,
	},
	separator: {
		height: 1,
		marginVertical: 30,
		width: "80%",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	camera: {
		flex: 1, // Take up all available space
	},
>>>>>>> develop
});
  
