import {ReactNode} from "react";
import {SafeAreaView, StatusBar, Platform, StyleSheet} from "react-native";

export default function SafeView({children}: {children: ReactNode}) {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar barStyle="dark-content"/>
			{children}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		flex: 1,
		backgroundColor: "#FAF9F6",
		paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},
});
