import { Feather, FontAwesome } from '@expo/vector-icons';
import { Link, Tabs } from "expo-router";
import { Pressable, StyleSheet, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

const tabBarIconSize = 28;
const tabBarIconSelectedSize = tabBarIconSize + 15;
const tabBarIconColor = '#5F5541';
const tabBarIconSelectedColor = '#E6E5D4';
const tabBarIconStyles = StyleSheet.create({
    focused: {
        backgroundColor: tabBarIconSelectedColor,
        width: tabBarIconSelectedSize,
        height: tabBarIconSelectedSize,
        borderRadius: tabBarIconSelectedSize / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon (props: {
  name: React.ComponentProps<typeof Feather>["name"]
  color: string,
  focused: boolean,
}) {
	return (
		<View style={(props.focused ? tabBarIconStyles.focused : {})}>
			<Feather size={tabBarIconSize} {...props} />
		</View>
	);
}

export default function TabLayout () {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: tabBarIconColor,
				tabBarInactiveTintColor: tabBarIconColor,
				tabBarStyle: {backgroundColor: "white",},
				headerShown: false
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name='home' color={color} focused={focused} />
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
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name='list' color={color} focused={focused} />
					)
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: "Camera",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name='camera' color={color} focused={focused} />
					)
				}}
			/>
			<Tabs.Screen
				name='info'
				options={{
					title: "Info",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon name='info' color={color} focused={focused} />
					)
				}}
			/>
		</Tabs>
	);
}
