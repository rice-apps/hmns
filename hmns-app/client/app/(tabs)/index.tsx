import { Pressable, StyleSheet } from "react-native";
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
		<View style={styles.mainContainer}>
			<View style={styles.container}>

				<View style={styles.topView}>
					{/*Top Greeting*/}
					<Text style={styles.botdTitle}>Good Afternoon!</Text>					
				</View>
			
				<View style={styles.botdView}>
					<Text style={styles.botdTitle}>Butterfly of the Day</Text>
					{/* Box Content */}
					<View style={styles.botdContentBox}>
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
				</View>

				<View style={styles.challengesView}>
					<Text style={styles.botdTitle}>Challenges</Text>
					{challenges.map(challenge => (
						<ChallengeItem key={challenge.title} challenge={challenge} />
					))}
				</View>
				
			</View>
		</View>
		
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
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	container: {
		alignItems: "center",
		flex: 0.9,
		justifyContent: "center",
		gap: 40,
		margin: "auto",
		width: "85%",
		backgroundColor: "transparent",
	},
	topView: {
		flex: 0.06,
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
		flex: 0.48,
		width: "100%",
		backgroundColor: "transparent",
		color: "black",
		display: "flex",
		gap: 2,
	},
	botdTitle: {
		color: "black", 
		fontWeight: "600",
		padding: 10, 
		fontSize: 20,
	},
	botdContentBox: {
		flexDirection: "row",
		padding: 10,
		paddingVertical: 20,
		flex: 1,
		backgroundColor: colors.botd,
		borderRadius: 18,
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
		flex: 0.46,
		backgroundColor: "transparent",
		width: "100%",
		display: "flex",
		justifyContent: "space-around"
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
	}
});
