import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useState } from "react";

const colors = {
	oceanBlue: "#066fab",
	observatoryNightSky: "#1d4965",
	fossilRim: "#5f5541",
	mossyOak: "#9d9b64",
	serengeti: "#d9ae4b",
	monarch: "#c57e2b",
	background: "#D6D5B9",
	countBadges: "#FFF5D6"
};

interface Challenge{
	title: string,
	status: boolean,
}

const mockChallenges:Challenge[] = [
	{
		title: "Identify two North American butterflies",
		status: false,
	},
	{
		title: "Identify three new butterflies in three days",
		status: false,
	},
];

export default function TabOneScreen () {
	const [challenges, ] = useState<Challenge[]>(mockChallenges);
	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>

				<View style={styles.topView}>
					{/*Add Image*/}
					{/*Top Greeting*/}
					<Text style={styles.botdTitle}>Good Afternoon!</Text>

					{/* Row container for Count and Basges */}
					<View style={styles.rowContainer}>
						{/* Count Box */}
						<View style={styles.countContainer}>
							<Text style={styles.topText}> Count </Text>
							<View style={styles.topCountBox}>
								<Text>1</Text>
							</View>
						</View>
						{/* Badges Box */}
						<View style={styles.badgesContainer}>
							<Text style={styles.topText}> Badges </Text>
							<View style={styles.topBadgesBox}>
								<Text>2</Text>
							</View>
						</View>
					</View>
					
				</View>
			
				<View style={styles.botdView}>
					<Text style={styles.botdTitle}>Butterfly of the Day</Text>
					{/* Box Content */}
					<View style={styles.botdContentBox}>
						{/* Left Side */}
						<View style={styles.botdLeftContainer}>
							<View>
								<Text style={styles.botdText}>MM/DD</Text>
								<Text style={styles.botdText}>Butterfly Name</Text>
							</View>
							<Text style={styles.botdText}>Fun Fact</Text>
							
						</View>
						{/* Right Side */}
						<View style={styles.botdRightContainer}>
							<View style={styles.botdImage}>
								<Text style={styles.topText}>Photo</Text>
								<Pressable style={styles.primaryButton}>
									<Text style={[styles.botdText, {paddingVertical: 3, fontSize: 12}]}>Tell me more!</Text>
								</Pressable>
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
			<Text style={{fontSize: 15, flex: 1, flexWrap: "wrap"}}>{challenge.title}</Text>
			<View style={{backgroundColor: "white", borderRadius: 9999, width: 30, height: 30}} />
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.background,
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
		flex: 0.20,
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
	countContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
		backgroundColor: "transparent",
	},
	badgesContainer: {
		flexDirection: "column",
		alignItems: "flex-start",
		backgroundColor: "transparent",
	},
	topCountBox: {
		backgroundColor: colors.countBadges,
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	topBadgesBox: {
		backgroundColor: colors.countBadges,
		padding: 10,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "300%",
	},
	botdView: {
		flex: 0.4,
		width: "100%",
		backgroundColor: "transparent",
		color: "black",
		display: "flex",
		gap: 2,
	},
	botdTitle: {
		color: colors.fossilRim, 
		padding: 10, 
		fontSize: 20,
	},
	botdContentBox: {
		flexDirection: "row",
		padding: 10,
		paddingVertical: 20,
		flex: 1,
		backgroundColor: colors.oceanBlue,
		borderRadius: 18,
	},
	botdLeftContainer: {
		flex: 1,
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: colors.oceanBlue,
	},
	botdRightContainer: {
		flex: 1,
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: colors.oceanBlue,
	},
	primaryButton: {
		backgroundColor: colors.oceanBlue,
		color: "black",
		padding: "5%",
		borderRadius: 11,
		position: "absolute",
		bottom: -5,
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
		flex: 0.4,
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
		backgroundColor: colors.mossyOak,
	},
	botdText: {
		backgroundColor: colors.oceanBlue,
		color: "white"
	},
	topText: {
		backgroundColor: "transparent",
		color: "black"
	}
});
