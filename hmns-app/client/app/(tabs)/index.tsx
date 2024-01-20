import { Dimensions, Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
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
	const windowHeight = Dimensions.get("window").height;
	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar barStyle="dark-content"/>
			<ScrollView style={styles.container} contentContainerStyle={{gap: 30, backgroundColor: "white", minHeight: "100%", paddingVertical: 15}} className="bg-white">
				{/*Header */}
				<View className="flex flex-row bg-transparent justify-between items-center">
					<Text className="text-black font-bold text-2xl">Good Afternoon!</Text>
					<Image source={require("../../assets/images/hmns-logo.png")} className="w-16 h-16"/>
				</View>

				{/* BOTD */}
				<View className={`flex flex-row rounded-md bg-[${colors.botd}] px-10 py-6`} style={{height: windowHeight*0.3}}>
					{/* Left Side */}
					<View className="bg-transparent flex w-3/5 justify-around">
						<Text className="font-bold text-black text-xl">Red Peacock</Text>
						<Text className="text-black">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod
						</Text>
						<Pressable className="p-2 px-3 rounded-full self-start" style={{backgroundColor: colors.learnmore}}>
							<Text className="text-xs">Learn more</Text>
						</Pressable>
					</View>
					{/* Right Side */}
					<View className="flex bg-transparent w-2/5">
						<View className="bg-white w-full h-4/5 rounded-lg flex justify-around items-center">
							<Text className="text-black">Photo</Text>
						</View>
					</View>
				</View>

				{/* Challenges */}
				<View className="flex bg-transparent" style={{gap: 20}}>
					{/* Challenges Header */}
					<View className="flex flex-row justify-between bg-transparent">
						<Text className="text-black text-xl font-bold">Challenges</Text>
						<Pressable className="flex justify-around items-center">
							<Text className="text-black">View all</Text>
						</Pressable>
					</View>
					
					{challenges.map(challenge => (
						<ChallengeItem key={challenge.title} challenge={challenge} />
					))}
				</View>

				{/* Resources */}
				<View className="flex bg-transparent" style={{gap: 20}}>
					{/* Challenges Header */}
					<View className="flex flex-row justify-between bg-transparent">
						<Text className="text-black text-xl font-bold">Challenges</Text>
						<Pressable className="flex justify-around items-center">
							<Text className="text-black">View all</Text>
						</Pressable>
					</View>
					
					{challenges.map(challenge => (
						<ChallengeItem key={challenge.title} challenge={challenge} />
					))}
				</View>

			</ScrollView>
		</SafeAreaView>
		
	);
}

const ChallengeItem = ({challenge}: {challenge: Challenge}) => {
	return (
		<View className="flex flex-row rounded-3xl p-4 border items-center justify-between bg-transparent">
			<View style={{backgroundColor: "transparent", borderRadius: 9999, width: 30, height: 30, borderColor: "black", borderWidth: 2}} />
			<View className="bg-transparent ml-2">
				<Text className="text-black flex-wrap font-bold text-base">{challenge.title}</Text>
				<Text className="text-black flex-wrap">{challenge.content}</Text>
			</View>			
		</View>
	);
};


const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		alignItems: "center",
		backgroundColor: "white",
		paddingTop: Platform.OS=="android"? StatusBar.currentHeight: 0
	},
	container: {
		paddingHorizontal: "7.5%",
		backgroundColor: "transparent",
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
