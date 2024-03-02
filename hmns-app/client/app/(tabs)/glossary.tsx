import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Text, Image,  FlatList, Pressable, TextInput, View  } from "react-native";
import { FilterSlideUp } from "../../components/FilterSlideUp";
import SafeView from "../../components/SafeView";
import CardPopup from '../../components/CardPopup/CardPopup'; 
import { colors } from "../../constants/appColors";

const mockButterflyData: butterflyGlossaryType[] = [
	{name: "Green 2 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "small", color: "green", img: "../../assets/images/hmns-logo.png"},
	{name: "White 3 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "small", color: "white", img: "../../assets/images/hmns-logo.png"},
	{name: "Yellow 4 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "small", color: "yellow", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 5 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "medium", color: "green", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 6 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "large", color: "green", img: "../../assets/images/hmns-logo.png"},
	{name: "Grey 8 High", genus: "something", species: "something", detectability: "high", wingspanSize: "large", color: "grey", img: "../../assets/images/hmns-logo.png"},
	{name: "Blue 3 High", genus: "something", species: "something", detectability: "high", wingspanSize: "small", color: "blue", img: "../../assets/images/hmns-logo.png"},
	{name: "Pink 4 High", genus: "something", species: "something", detectability: "high", wingspanSize: "small", color: "pink", img: "../../assets/images/hmns-logo.png"},
	{name: "Black 5 High", genus: "something", species: "something", detectability: "high", wingspanSize: "medium", color: "black", img: "../../assets/images/hmns-logo.png"},
	{name: "Brown 7 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "large", color: "brown", img: "../../assets/images/hmns-logo.png"},
	{name: "Brown 7 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "large", color: "brown", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 1 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "small", color: "green", img: "../../assets/images/hmns-logo.png"}
];


interface butterflyGlossaryType {
  name: string,
  genus: string,
  species: string,
  detectability: string,
  wingspanSize: string,
	color: string,
  img: string,

}


export default function Glossary() {
	const [filterVisible, setFilterVisible] = useState<boolean>(false);
	const [butterflyData, setButterflyData]  =useState(mockButterflyData);
	const [isModalVisible, setModalVisible] = useState(false); // State to manage popup visibility

	const toggleModal = () => {
		console.log("Before toggle:", isModalVisible);
		setModalVisible(!isModalVisible);
		console.log("After toggle:", !isModalVisible);
	  };

	const handleButterflyFilter = (filterSize, filterColor, filterDetectability) => {
		setButterflyData(mockButterflyData.filter(({wingspanSize, color, detectability})=> {
			if(filterSize && wingspanSize!==filterSize)return false;
			if(filterColor && color!==filterColor)return false;
			if(filterDetectability && detectability!==filterDetectability)return false;
			return true;
		}));
	};

	return (
		<SafeView>
			{/* Viewable Page */}
			<View className="w-full p-5 pt-2">
				{/* Top Bar */}
				<View className="h-10 flex flex-row mb-3" style={{gap: 8}}>
					<Pressable onPress={()=>setFilterVisible(true)}>
						<Image source={require("../../assets/images/filter-icon.png")} className="w-10 h-10"/>
					</Pressable>
					
					<View
						className="grow border rounded-2xl flex flex-row items-center px-3 bg-white"
						style={{borderColor: colors.mossyOak}}
					>
						<TextInput className="grow" />
						<FontAwesome name="search" />
					</View>
				</View>
				<View className="w-screen h-[1] bg-[#DEDDCB] -ml-5" />

				{/* Grid */}
				<FlatList
					numColumns={2}
					data={butterflyData}
					renderItem={({item}) => <ButterflyCard name={item.name} img={item.img} onButtonPress={toggleModal}  />}
					contentContainerStyle={{gap: 20, paddingTop: 10, paddingBottom: 5}}
					columnWrapperStyle={{justifyContent: "space-around"}}
					style={{height: "95%"}}
				/>

		<CardPopup visible={isModalVisible} onClose={toggleModal} />

			</View>
			

			{/* Filter component */}
			<FilterSlideUp
				filterVisible={filterVisible}
				onFilter={handleButterflyFilter}
				onClose={() => setFilterVisible(false)}
			/>
		</SafeView>
	);
}const ButterflyCard = ({ name, img, onButtonPress }: { name: string; img: string; onButtonPress: () => void }) => {
	return (
	  <View
		style={{
		  flex: 1, // Make sure the card expands to fill available space in its container
		  alignItems: 'center', // Center children horizontally
		  justifyContent: 'center', // Center children vertically
		  borderStyle: 'solid',
		  borderWidth: 1,
		  borderRadius: 20,
		  width: '45%', // Adjust the width as needed
		  height: 160, // Adjust the height as needed
		  padding: 12,
		  borderColor: colors.mossyOak,
		  backgroundColor: 'white',
		  margin: 5, // Add some margin to separate cards
		}}
	  >
		<Pressable onPress={onButtonPress} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
		  <Image
			source={require("../../assets/images/hmns-logo.png")}
			style={{ width: '90%', height: '67%', resizeMode: 'contain' }} // Adjust the size as needed
		  />
		  <Text
			style={{
			  textAlign: 'center',
			  paddingTop: 5,
			  color: colors.fossilRim,
			  fontSize: 16, // Adjust the font size as needed
			}}
		  >
			{name}
		  </Text>
		</Pressable>
	  </View>
	);
  };
  