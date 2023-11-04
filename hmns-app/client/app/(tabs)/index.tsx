import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { FilterSlideUp } from "../../components/FilterSlideUp";
import { useState } from "react";

export default function TabOneScreen () {
        const [text, setText] = useState<string>("Tab One");
        const [filterVisible, setFilterVisible] = useState<boolean>(false);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{text}</Text>
			<View
				style={styles.separator}
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
			/>
                        <FilterSlideUp
                            filterVisible={filterVisible}
                            onFilter={(size, color) => setText(`filtered: ${size} ${color}`)}
                            onClose={() => setFilterVisible(false)}
                            />
                        <Button title="Show filter" onPress={() => setFilterVisible(true)} />
			<EditScreenInfo path='app/(tabs)/index.tsx' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
	},
	separator: {
		height: 1,
		marginVertical: 30,
		width: "80%"
	},
	title: {
		fontSize: 20,
		fontWeight: "bold"
	}
});
