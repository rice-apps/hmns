import { Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useState } from "react";
import { colors } from "../../constants/appColors";


interface Challenge {
	title: string,
	status: boolean,
	content: string,
}


const mockChallenges:Challenge[] = [
	{
		title: "Challenge 1",
		status: false,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
	},
	{
		title: "Challenge 2",
		status: false,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
	},
];


export default function TabOneScreen () {
	const [challenges, ] = useState<Challenge[]>(mockChallenges);
	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar barStyle="dark-content"/>
			<ScrollView style={styles.container} contentContainerStyle={{gap: 2, backgroundColor: "yellow",}}>

				<View style={styles.topView}>
					<Text style={styles.botdTitle}>Good Afternoon!</Text>
				</View>

				<View style={styles.botdView}>
					{/* Left Side */}
					<View style={styles.botdLeftContainer}>
						<Text style={{color: "black", fontWeight: "600", fontSize: 22}}>Red Peacock</Text>
						<Text style={{color: "black", fontSize: 13,}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod
						</Text>
						<Pressable style={styles.botdButton}>
							<Text style={styles.botdButtonText}>Learn more!</Text>
						</Pressable>
					</View>
					{/* Right Side */}
					<View style={styles.botdRightContainer}>
						<View style={styles.botdImage}>
							<Text style={styles.topText}>Photo</Text>
						</View>
					</View>
				</View>

				<View style={styles.challengesView}>
					<View style={{backgroundColor: "transparent", flexDirection: "row", justifyContent: "space-between"}}>
						<Text style={styles.botdTitle}>Challenges</Text>
						<Pressable style={{justifyContent: "center"}}>
							<Text style={{color: "black"}}>View all</Text>
						</Pressable>
					</View>
					
					{challenges.map(challenge => (
						<ChallengeItem key={challenge.title} challenge={challenge} />
					))}
				</View>

				<Text style={{color: "black", fontSize: 200}}>Hello</Text>
				<Text style={{color: "black"}}>Hello</Text>
				<Text style={{color: "black"}}>Hello</Text>

			</ScrollView>
		</SafeAreaView>
		
	);
}

const ChallengeItem = ({challenge}: {challenge: Challenge}) => {
	return (
		<View style={styles.challengeItemView}>
			<View style={{backgroundColor: "transparent", borderRadius: 9999, width: 30, height: 30, borderColor: "black", borderWidth: 2}} />
			<View style={{flex: 1, backgroundColor: "transparent"}}>
				<Text style={{fontSize: 15, flexWrap: "wrap", fontWeight: "bold", color: "black"}}>{challenge.title}</Text>
				<Text style={{fontSize: 12, flexWrap: "wrap", marginTop: 4, color: "black"}}>{challenge.content}</Text>
			</View>			
		</View>
	);
};


const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		alignItems: "center",
		backgroundColor: "green",
		paddingTop: Platform.OS=="android"? StatusBar.currentHeight: 0
	},
	container: {
		paddingHorizontal: "7.5%",
		backgroundColor: "transparent",
	},
	topView: {
		height: 60,
		backgroundColor: "transparent",
		width: "100%",
		color: "black",
	},
	topTitle: {
		color: colors.fossilRim,
		padding: 10,
		fontSize: "30%",
		alignItems: "center",
	},
	logoContainer: {
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	rowContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: 75,
		backgroundColor: "transparent",
	},
	botdView: {
		height: 480,
		flexDirection: "row",
		padding: 10,
		paddingVertical: 25,
		backgroundColor: colors.botd,
		borderRadius: 18,
	},
	imageContainer: {
		width: 100,
		height: 100,
		backgroundColor: "grey",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	botdTitle: {
		color: "black", 
		fontWeight: "600",
		padding: 20, 
		fontSize: 20,
	},
	botdLeftContainer: {
		flex: 0.55,
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: "transparent",
	},
	botdRightContainer: {
		flex: 0.45,
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "transparent",
	},
	botdButton: {
		backgroundColor: colors.learnmore,
		color: "black",
		padding: 10,
		borderRadius: 15,
		alignSelf: "flex-start"
	},
	botdButtonText: {
		fontSize: 12
	},
	botdImage: {
		backgroundColor: "white",
		flex: 1,
		width: "80%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		resizeMode: "stretch",
		borderRadius: 11
	},
	challengesView: {
		height: 400,
		backgroundColor: "red",
		width: "100%",
		display: "flex",
		justifyContent: "space-between"
	},
	challengeItemView: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 7,
		padding: 15,
		borderRadius: 20,
		backgroundColor: colors.challenges,
	},
	topText: {
		backgroundColor: "transparent",
		color: "black"
	},
	imagePlaceholderText: {
		color: "white"
	},
});
