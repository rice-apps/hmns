import { useThemeColor } from "./Themed";
import { Modal, StyleSheet, View, Text, Pressable, DimensionValue } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { useState } from "react";

type ButterflyWingspan = 'small' | 'medium' | 'large';
type ButterflyColor = 'white' | 'yellow' | 'grey' | 'green' | 'blue' | 'black' | 'pink' | 'brown';
type ButterflyDetectability = 'low' | 'medium' | 'high';

type ButterflyWingspanDisplay = {
    displaySize: DimensionValue,
    sizeTitle: string,
    sizeSubtitle: string,
    value: ButterflyWingspan,
}

type ButterflyColorDisplay = {
    displayColor: string,
    colorName: string,
    value: ButterflyColor,
}

type ButterflyDetectabilityDisplay = {
    detectabilityName: string,
    value: ButterflyDetectability,
}

const fontFamily = 'sans-serif';
const filterCategoryFontSize = 16;
const filterTitleFontSize = 24;
const filterTitleLeftMargin = '5%';
const filterCategoryLeftMargin = '7%';
const filterButtonColor = 'grey';
const filterButtonFontSize = 20;

const wingspans: ButterflyWingspanDisplay[] = [{
    displaySize: 25,
    value: 'small',
    sizeTitle: 'Small',
    sizeSubtitle: '2-4cm',
}, {
    displaySize: 40,
    value: 'medium',
    sizeTitle: 'Medium',
    sizeSubtitle: '4-6cm',
}, {
    displaySize: 55,
    value: 'large',
    sizeTitle: 'Large',
    sizeSubtitle: '6-8cm',
}];
const colors: ButterflyColorDisplay[] = [{
    displayColor: '#FFFFFF',
    colorName: 'White',
    value: 'white',
}, {
    displayColor: '#D9AE4B',
    colorName: 'Yellow',
    value: 'yellow',
}, {
    displayColor: '#6A6763',
    colorName: 'Grey',
    value: 'grey'
}, {
    displayColor: '#9D9B64',
    colorName: 'Green',
    value: 'green'
}, {
    displayColor: '#BCD3E0',
    colorName: 'Blue',
    value: 'blue'
}, {
    displayColor: '#000000',
    colorName: 'Black',
    value: 'black'
}, {
    displayColor: '#C07474',
    colorName: 'Pink',
    value: 'pink'
}, {
    displayColor: '#C57E2B',
    colorName: 'Brown',
    value: 'brown'
}];

type FilterProps = {
    lightColorForeground?: string;
    darkColorForeground?: string;
    lightColorBackground?: string;
    darkColorBackground?: string;
    filterVisible: boolean;
    onClose: () => void;
    onFilter: (size: string | null, color: string | null) => void;
};

export const FilterSlideUp = (props: FilterProps) => {
    const [size, setSize] = useState<string | null>(null);
    const [color, setColor] = useState<string | null>(null);
    const filterBackground = useThemeColor({ light: props.lightColorBackground, dark: props.darkColorBackground }, 'background');
    const filterForeground = useThemeColor({ light: props.lightColorForeground, dark: props.darkColorForeground }, 'text');
    const backgroundStyle = { backgroundColor: filterBackground };
    const foregroundStyle = { color: filterForeground };
    const foregroundBgStyle = { backgroundColor: filterForeground };

    return (
        <Modal animationType="slide"
            transparent={true}
            visible={props.filterVisible}
            onRequestClose={props.onClose}
        >
            <View style={styles.slideUp}>
                <View
                    style={[
                        styles.filterContainer,
                        backgroundStyle,
                    ]}>
                    <EvilIcons name="close" size={34} color={filterForeground} onPress={props.onClose} style={styles.closeButton} />
                    <Text style={[styles.filterTitle, foregroundStyle]}>Filter</Text>
                    <View style={styles.sizes}>
                        <Text style={[styles.categoryText, foregroundStyle]}>Size</Text>
                        {sizes.map(size =>
                            <Pressable key={size.value}
                                style={[
                                    foregroundBgStyle,
                                    {
                                        width: size.displaySize,
                                        height: size.displaySize
                                    }]}
                                onPress={() => setSize(size.value)}>
                            </Pressable>)}
                    </View>
                    <View style={styles.colors}>
                        <Text style={[styles.categoryText, foregroundStyle]}>Color</Text>
                        {colors.map(color =>
                            <Pressable key={color.value}
                                style={[
                                    styles.colorCircle,
                                    { backgroundColor: color.displayColor }
                                ]}
                                onPress={() => setColor(color.value)}>
                            </Pressable>
                        )}
                    </View>
                    <Pressable
                        onPress={() => props.onFilter(size, color)}
                        style={styles.filterButton}
                    >
                        <Text style={[styles.filterButtonLabel, foregroundStyle]}>Apply Filter</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    slideUp: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    filterContainer: {
        flexDirection: 'column',
        paddingBottom: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginTop: 5,
        marginRight: 5,
    },
    filterTitle: {
        marginLeft: filterTitleLeftMargin,
        fontSize: filterTitleFontSize,
        fontFamily: fontFamily,
    },
    sizes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 50,
    },
    categoryText: {
        marginLeft: filterCategoryLeftMargin,
        fontSize: filterCategoryFontSize,
        fontFamily: fontFamily,
    },
    filterButton: {
        width: '50%',
        paddingVertical: 5,
        backgroundColor: filterButtonColor,
        alignSelf: 'center',
    },
    filterButtonLabel: {
        fontFamily: fontFamily,
        fontSize: filterButtonFontSize,
        textAlign: 'center',
    },
    colors: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 30,
    },
    colorCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});
