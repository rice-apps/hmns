import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { FilterSlideUp } from "../../components/FilterSlideUp";
import SafeView from "../../components/SafeView";
import { colors } from "../../constants/appColors";

interface butterflyGlossaryType {
  name: string,
  genus: string,
  species: string,
  detectability: string,
  wingspanSize: number,
	color: string,
  img: string,

}

const mockButterflies: butterflyGlossaryType[] = [
	{name: "Green 2 Low", genus: "something", species: "something", detectability: "Low", wingspanSize: 2, color: "Green", img: "../../assets/images/hmns-logo.png"},
	{name: "White 3 Medium", genus: "something", species: "something", detectability: "Medium", wingspanSize: 3, color: "White", img: "../../assets/images/hmns-logo.png"},
	{name: "Yellow 4 Medium", genus: "something", species: "something", detectability: "Medium", wingspanSize: 4, color: "Yellow", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 5 Medium", genus: "something", species: "something", detectability: "Medium", wingspanSize: 5, color: "Green", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 6 Medium", genus: "something", species: "something", detectability: "Medium", wingspanSize: 6, color: "Green", img: "../../assets/images/hmns-logo.png"},
	{name: "Grey 8 High", genus: "something", species: "something", detectability: "High", wingspanSize: 8, color: "Grey", img: "../../assets/images/hmns-logo.png"},
	{name: "Blue 3 High", genus: "something", species: "something", detectability: "High", wingspanSize: 3, color: "Blue", img: "../../assets/images/hmns-logo.png"},
	{name: "Pink 4 High", genus: "something", species: "something", detectability: "High", wingspanSize: 4, color: "Pink", img: "../../assets/images/hmns-logo.png"},
	{name: "Black 5 High", genus: "something", species: "something", detectability: "High", wingspanSize: 5, color: "Black", img: "../../assets/images/hmns-logo.png"},
	{name: "Brown 7 Low", genus: "something", species: "something", detectability: "Low", wingspanSize: 7, color: "Brown", img: "../../assets/images/hmns-logo.png"},
	{name: "Brown 7 Low", genus: "something", species: "something", detectability: "Low", wingspanSize: 7, color: "Brown", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 1 Low", genus: "something", species: "something", detectability: "Low", wingspanSize: 1, color: "Green", img: "../../assets/images/hmns-logo.png"}
];


export default function Glossary() {
	const [filterVisible, setFilterVisible] = useState<boolean>(false);
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
					data={mockButterflies}
					renderItem={({item}) => <ButterflyCard name={item.name} img={item.img} />}
					contentContainerStyle={{gap: 20, paddingTop: 10, paddingBottom: 5}}
					columnWrapperStyle={{justifyContent: "space-around"}}
					style={{height: "95%"}}
				/>
			</View>

			{/* Filter component */}
			<FilterSlideUp
				filterVisible={filterVisible}
				onFilter={(size, color, detect) => /* do whatever on filter here */ 0}
				onClose={() => setFilterVisible(false)}
			/>
		</SafeView>
	);
}

const ButterflyCard = ({name, img}: {name: string; img: string}) => {
	return (
		<View
			className="flex items-center border rounded-2xl w-[45%] h-40 px-3 bg-white"
			style={{borderColor: colors.mossyOak}}
		>
			<Image className="h-2/3 w-[90%] rounded-2xl mt-3" source={require("../../assets/images/hmns-logo.png")} />
			<Text className="text-center font-medium pt-1" style={{color: colors.fossilRim}}>
				{name}
			</Text>
		</View>
	);
};
