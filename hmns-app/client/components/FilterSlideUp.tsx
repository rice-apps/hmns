import { useThemeColor } from "./Themed";
import { Image, Modal, StyleSheet, View, Text, Pressable, DimensionValue, FlatList } from "react-native";
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
const filterCategoryHeaderFontSize = 14;
const filterTitleLeftMargin = '5%';
const filterCategoryLeftMargin = '7%';
const filterButtonColor = 'grey';
const filterButtonFontSize = 20;
const filterColorDiameter = 15;

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
const detectabilities: ButterflyDetectabilityDisplay[] = [{
    detectabilityName: 'Low',
    value: 'low',
}, {
    detectabilityName: 'Medium',
    value: 'medium',
}, {
    detectabilityName: 'High',
    value: 'high',

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
                        {wingspans.map(size =>
                            <Pressable key={size.value}
                                onPress={() => setSize(size.value)}
                                style={styles.sizeContainer}>
                                <Image source={require('../assets/images/butterfly_wingspan.png')}
                                    style={[{
                                        width: size.displaySize,
                                        height: size.displaySize
                                    }]} />
                                <Text style={[styles.sizeTitle, foregroundStyle]}>{size.sizeTitle}</Text>
                                <Text style={[styles.sizeSubtitle, foregroundStyle]}>{size.sizeSubtitle}</Text>
                            </Pressable>)}
                    </View>
                    <View style={styles.colors}>
                        <Text style={[styles.categoryText, foregroundStyle]}>Color</Text>
                        <FlatList
                            data={colors}
                            keyExtractor={color => color.value}
                            renderItem={color => (
                                <Pressable key={color.item.value}
                                    style={styles.colorRow}
                                    onPress={() => setColor(color.item.value)}>
                                    <View style={[styles.colorCircle, { backgroundColor: color.item.displayColor }]} />
                                    <Text style={[styles.colorTitle, foregroundStyle]}>{color.item.colorName}</Text>
                                </Pressable>
                            )}
                            numColumns={4}
                        />
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
    sizeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sizeTitle: {
        fontFamily: fontFamily,
        fontWeight: 'bold',
        fontSize: filterCategoryHeaderFontSize,
    },
    sizeSubtitle: {
        fontFamily: fontFamily,
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
    colorRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: filterColorDiameter / 2,
        width: '24%',
    },
    colorCircle: {
        width: filterColorDiameter,
        height: filterColorDiameter,
        borderRadius: filterColorDiameter / 2,
    },
    colorTitle: {
        fontFamily: fontFamily,
        fontWeight: 'bold',
        fontSize: filterCategoryHeaderFontSize,
    }
});
