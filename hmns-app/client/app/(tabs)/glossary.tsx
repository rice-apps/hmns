import {Image, ScrollView, Text, TextInput, View} from "react-native";
import SafeView from "../../components/SafeView";
import {colors} from "../../constants/appColors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Glossary() {
	return (
		<SafeView>
			<ScrollView className="w-full p-5">
				{/* Top Bar */}
				<View className="h-10 flex flex-row" style={{gap: 8}}>
					<Image source={require("../../assets/images/filter-icon.png")} className="w-10 h-10" />
					<View className="grow border rounded-2xl flex flex-row items-center px-3" style={{borderColor: colors.mossyOak}}>
						<TextInput className="grow"/>
						<FontAwesome name="search" />
					</View>
				</View>

				<View className="grid grid-cols-2"></View>
			</ScrollView>
		</SafeView>
	);
}
