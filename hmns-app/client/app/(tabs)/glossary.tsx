import FontAwesome from "@expo/vector-icons/FontAwesome";
import { memo, useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import { FilterSlideUp } from "../../components/FilterSlideUp";
import SafeView from "../../components/SafeView";
import { colors } from "../../constants/appColors";

interface butterflyGlossaryType {
  name: string,
  genus: string,
  species: string,
  detectability: string,
  wingspanSize: string,
	color: string,
  img: string,

}

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


export default function Glossary() {
	const [filterVisible, setFilterVisible] = useState<boolean>(false);
	const [butterflyData, setButterflyData] = useState(mockButterflyData);
	const [searchQuery, setSearchQuery] = useState("");

	const handleButterflyFilter = (filterSize, filterColor, filterDetectability) => {
		setButterflyData(mockButterflyData.filter(({wingspanSize, color, detectability})=> {
			if(filterSize && wingspanSize!==filterSize)return false;
			if(filterColor && color!==filterColor)return false;
			if(filterDetectability && detectability!==filterDetectability)return false;
			return true;
		}));
		
	};

	const getSearchFilteredData = () => {
		return butterflyData.filter(({name}) => {
			return name.toLowerCase().includes(searchQuery.toLowerCase());
		});
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
						<TextInput value={searchQuery} onChangeText={searchText => setSearchQuery(searchText)} className="grow" />
						<FontAwesome name="search" />
					</View>
				</View>
				<View className="w-screen h-[1] bg-[#DEDDCB] -ml-5" />

				{/* Grid */}
				<GlossaryGrid searchQuery={searchQuery} getSearchFilteredData={getSearchFilteredData} butterflyData={butterflyData} />
			</View>

			{/* Filter component */}
			<FilterSlideUp
				filterVisible={filterVisible}
				onFilter={handleButterflyFilter}
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

interface GlossaryGridProps{
	getSearchFilteredData: () => butterflyGlossaryType[],
	searchQuery: string,
	butterflyData: butterflyGlossaryType[]
}

const GlossaryGrid = memo(function GlossaryGrid(props: GlossaryGridProps){
	return (
		<FlatList
			numColumns={2}
			data={props.getSearchFilteredData()}
			renderItem={({item}) => <ButterflyCard name={item.name} img={item.img} />}
			contentContainerStyle={{gap: 20, paddingTop: 10, paddingBottom: 5}}
			columnWrapperStyle={{justifyContent: "space-around"}}
			style={{height: "95%"}}
		/>
	);
}, (oldProps, newProps)=> oldProps.searchQuery===newProps.searchQuery && oldProps.butterflyData===newProps.butterflyData);
