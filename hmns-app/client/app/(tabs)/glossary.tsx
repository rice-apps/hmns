import FontAwesome from "@expo/vector-icons/FontAwesome";
import {FlatList, Image, Text, TextInput, View} from "react-native";
import SafeView from "../../components/SafeView";
import {colors} from "../../constants/appColors";

interface butterflyGlossaryType {
  name: string;
  img: string;
}

const mockButterflies: butterflyGlossaryType[] = [
	{name: "White Peacock", img: "../../assets/images/hmns-logo.png"},
	{name: "Great Southern White", img: "../../assets/images/hmns-logo.png"},
	{name: "Mexican Bluewing", img: "../../assets/images/hmns-logo.png"},
	{name: "White Peacock", img: "../../assets/images/hmns-logo.png"},
	{name: "Great Southern White", img: "../../assets/images/hmns-logo.png"},
	{name: "Mexican Bluewing", img: "../../assets/images/hmns-logo.png"},
	{name: "White Peacock", img: "../../assets/images/hmns-logo.png"},
	{name: "Great Southern White", img: "../../assets/images/hmns-logo.png"},
	{name: "Mexican Bluewing", img: "../../assets/images/hmns-logo.png"},
	{name: "White Peacock", img: "../../assets/images/hmns-logo.png"},
	{name: "Great Southern White", img: "../../assets/images/hmns-logo.png"},
	{name: "Mexican Bluewing", img: "../../assets/images/hmns-logo.png"},
];

export default function Glossary() {
	return (
		<SafeView>
			<View className="w-full p-5 pt-2">
				{/* Top Bar */}
				<View className="h-10 flex flex-row mb-3" style={{gap: 8}}>
					<Image source={require("../../assets/images/filter-icon.png")} className="w-10 h-10" />
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
