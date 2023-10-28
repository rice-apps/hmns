import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import CameraComponent from "../../components/CameraComponent";
import { Text, View } from "../../components/Themed";

export default function TabTwoScreen() {
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
		<CameraComponent style={{ flex: 1 }} />
	  </View>
	);
  }
  
  const styles = StyleSheet.create({
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
  });
  