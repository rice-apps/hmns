import { StyleSheet } from "react-native";
import CameraComponent from "../../components/CameraComponent";
import { View } from "../../components/Themed";

export default function TabTwoScreen() {
	return (
		<View style={styles.container}>
			<CameraComponent/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
