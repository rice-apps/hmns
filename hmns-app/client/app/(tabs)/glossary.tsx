import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import SafeView from "../../components/SafeView";
import { colors } from "../../constants/appColors";

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
			<View className="w-full p-5">
				{/* Top Bar */}
				<View className="h-10 flex flex-row mb-5" style={{gap: 8}}>
					<Image source={require("../../assets/images/filter-icon.png")} className="w-10 h-10" />
					<View
						className="grow border rounded-2xl flex flex-row items-center px-3"
						style={{borderColor: colors.mossyOak}}
					>
						<TextInput className="grow" />
						<FontAwesome name="search" />
					</View>
				</View>

				{/* Grid */}
				<FlatList
					numColumns={2}
					data={mockButterflies}
					renderItem={({item}) => <ButterflyCard name={item.name} img={item.img} />}
					contentContainerStyle={{gap: 20}}
					columnWrapperStyle={{justifyContent: "space-around"}}
					style={{height: "93%"}}
				/>
			</View>
		</SafeView>
	);
}

const ButterflyCard = ({name, img}: {name: string; img: string}) => {
	return (
		<View className="flex items-center border rounded-2xl w-[45%] h-32 px-3" style={{borderColor: colors.mossyOak}}>
			<Image source={require("../../assets/images/hmns-logo.png")} />
			<Text className="text-center font-medium" style={{color: colors.fossilRim}}>{name}</Text>
		</View>
	);
};
