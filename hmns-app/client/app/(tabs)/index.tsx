import {Dimensions, Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Button} from "react-native";
import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text } from '../../components/Themed';
import CardPopup from '../../components/CardPopup/CardPopup'; 
import React, { useState } from 'react';
import {colors} from "../../constants/appColors";

interface Challenge {
  title: string;
  status: boolean;
  content: string;
}

interface Resource {
  title: string;
  content: string;
}

const mockChallenges: Challenge[] = [
	{
		title: "Challenge 1",
		status: false,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
	},
	{
		title: "Challenge 2",
		status: false,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
	},
];

const mockResources: Resource[] = [
	{
		title: "Pollinator Gardening",
		content: "Explore the Community Science Garden and learn about pollinators.",
	},
	{
		title: "Monarch Butterflies",
		content: "Dive into Monarch Conservation, Migration Insights, and Butterfly Gardening.",
	},
];

export default function TabOneScreen() {
	const [challenges] = useState<Challenge[]>(mockChallenges);
	const [resources] = useState<Resource[]>(mockResources);
	const windowHeight = Dimensions.get("window").height;
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    
	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar barStyle="dark-content" />
			<ScrollView
				style={styles.scrollContainer}
				contentContainerStyle={{
					gap: 30,
					backgroundColor: "#FAF9F6",
					minHeight: "100%",
					maxWidth: "100%",
					paddingVertical: 15,
				}}
				className="bg-white"
			>
				{/*Header */}
				<View className="flex flex-row bg-transparent justify-between items-center">
					<Text className="text-black font-bold text-2xl">Good Afternoon!</Text>
					<Image source={require("../../assets/images/hmns-logo.png")} className="w-16 h-16" />
				</View>

				{/* BOTD */}
				<View
					className={`flex flex-row rounded-xl bg-[#CECDB4] px-10 py-6 border-2 border-[#CECDB4]/50`}
					style={{height: windowHeight * 0.3}}
				>
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
						<Text className="text-xl font-bold" style={{color: colors.fossilRim}}>Challenges</Text>
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
					{/* Resources Header */}
					<View className="flex flex-row justify-between bg-transparent">
						<Text className="text-xl font-bold" style={{color: colors.fossilRim}}>Resources</Text>
						<Pressable className="flex justify-around items-center">
							<Text className="text-black">View all</Text>
						</Pressable>
					</View>

					{resources.map(resource => (
						<ResourceItem key={resource.title} resource={resource} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const ChallengeItem = ({challenge}: {challenge: Challenge}) => {
	return (
		<View className="flex flex-row rounded-2xl p-4 border items-center justify-between bg-transparent">
			<View
				style={{
					backgroundColor: "transparent",
					borderRadius: 9999,
					width: 30,
					height: 30,
					borderColor: "black",
					borderWidth: 2,
				}}
			/>
			<View className="bg-transparent ml-2">
				<Text className="text-black flex-wrap font-bold text-base">{challenge.title}</Text>
				<Text className="text-black flex-wrap">{challenge.content}</Text>
			</View>
		</View>
	);
};
const ResourceItem = ({resource}: {resource: Resource}) => {
	return (
		<View className="flex flex-row rounded-2xl p-4 border items-start justify-between bg-transparent">
			<View className="bg-black w-1/3 h-28 rounded-lg flex justify-around items-center">
				<Text className="text-white">Photo</Text>
			</View>
			<View className="bg-transparent ml-2" style={{maxWidth: "64%"}}>
				<Text className="text-black flex-wrap font-bold text-base">{resource.title}</Text>
				<Text className="text-black flex-wrap">{resource.content}</Text>
			</View>
		</View>
	);
};

  /*return (
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
      {/* //test */}
    </View>
  );
}*/
  
const styles = StyleSheet.create({
	mainContainer: {
		display: "flex",
		alignItems: "center",
		backgroundColor: "#FAF9F6",
		paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},
	scrollContainer: {
		paddingHorizontal: "7.5%",
		backgroundColor: "transparent",
  },
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
	header: {
		alignItems: "center",
		justifyContent: "center",
		flex: 0.45,
	},
	camera: {
		flex: 1, 
	},
});
  
