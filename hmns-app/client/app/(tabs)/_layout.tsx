import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { colors } from "../../constants/appColors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
	return (
		<View style={{}}>
			<FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
		</View>
	);
}

export default function TabLayout () {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.mossyOak,
				tabBarStyle: {backgroundColor: colors.botd, borderTopLeftRadius: 20, borderTopRightRadius: 20,},
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='home' color={color} />
					),
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name='glossary'
				options={{
					title: "Glossary",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='list' color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: "Camera",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='camera' color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='info'
				options={{
					title: "Info",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='info' color={color} />
					)
				}}
			/>
		</Tabs>
	);
}
