import { Text, TextProps } from "./Themed";

// Test comment
export function MonoText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}
