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
const filterTopRadius = 15;
const filterCategoryFontSize = 18;
const filterTitleFontSize = filterCategoryFontSize * 1.2;
const filterCategoryHeaderFontSize = 14;
const filterCategoryLeftMargin = '7%';
const filterButtonColor = '#9D9B64';
const filterButtonFontSize = filterCategoryFontSize;
const filterColorDiameter = 15;
const filterDetectabilityButtonHeight = 30;
const filterDetectabilityButtonWidth = '25%';

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
    onFilter: (size: ButterflyWingspan | null, color: ButterflyColor | null, detectability: ButterflyDetectability | null) => void;
    initialSize?: ButterflyWingspan,
    initialColor?: ButterflyColor,
    initialDetectability?: ButterflyDetectability,
};

export const FilterSlideUp = (props: FilterProps) => {
    const [currSize, setSize] = useState<ButterflyWingspan | null>(props.initialSize ?? null);
    const [currColor, setColor] = useState<ButterflyColor | null>(props.initialColor ?? null);
    const [currDetectability, setDetectability] = useState<ButterflyDetectability | null>(props.initialDetectability ?? null);
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
                    <View style={styles.topRow}>
                        <Text style={[styles.filterTitle, foregroundStyle]}>Filter</Text>
                        <EvilIcons name="close" size={34} color={filterForeground} onPress={props.onClose} style={styles.closeButton} />
                    </View>

                    <Text style={[styles.categoryText, foregroundStyle]}>Size</Text>
                    <View style={styles.sizes}>
                        {wingspans.map(size =>
                            <Pressable key={size.value}
                                onPress={() => setSize(size.value)}
                                style={[styles.sizeContainer, (currSize === size.value && styles.selectedBorder)]}>
                                <Image source={require('../assets/images/butterfly_wingspan.png')}
                                    style={[{
                                        width: size.displaySize,
                                        height: size.displaySize
                                    }]} />
                                <Text style={[styles.sizeTitle, foregroundStyle]}>{size.sizeTitle}</Text>
                                <Text style={[styles.sizeSubtitle, foregroundStyle]}>{size.sizeSubtitle}</Text>
                            </Pressable>)}
                    </View>

                    <Text style={[styles.categoryText, foregroundStyle]}>Color</Text>
                    <View style={styles.colors}>
                        <FlatList
                            data={colors}
                            keyExtractor={color => color.value}
                            renderItem={color => (
                                <Pressable key={color.item.value}
                                    style={[styles.colorRow, (currColor === color.item.value && styles.selectedBorder)]}
                                    onPress={() => setColor(color.item.value)}>
                                    <View style={[styles.colorCircle, { backgroundColor: color.item.displayColor }]} />
                                    <Text style={[styles.colorTitle, foregroundStyle]}>{color.item.colorName}</Text>
                                </Pressable>
                            )}
                            numColumns={4}
                        />
                    </View>

                    <Text style={[styles.categoryText, foregroundStyle]}>Detectability</Text>
                    <View style={styles.detectability}>
                        {detectabilities.map(detect => (
                            <Pressable key={detect.value}
                                onPress={() => setDetectability(detect.value)}
                                style={[styles.detectabilityButton, (currDetectability === detect.value && styles.selectedFill)]}>
                                <Text style={[styles.detectabilityText, foregroundStyle]}>{detect.detectabilityName}</Text>
                            </Pressable>
                        ))}
                    </View>
                    <Pressable
                        onPress={() => props.onFilter(currSize, currColor, currDetectability)}
                        style={styles.filterButton}
                    >
                        <Text style={[styles.filterButtonLabel, foregroundStyle]}>Apply</Text>
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
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: filterCategoryLeftMargin,
    },
    filterContainer: {
        flexDirection: 'column',
        paddingBottom: 10,
        borderTopLeftRadius: filterTopRadius,
        borderTopRightRadius: filterTopRadius,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginTop: 5,
        marginRight: 5,
    },
    filterTitle: {
        fontSize: filterTitleFontSize,
        fontFamily: fontFamily,
    },
    sizes: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center',
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
        width: '30%',
        borderRadius: 20,
        paddingVertical: 10,
        backgroundColor: filterButtonColor,
        alignSelf: 'center',
    },
    filterButtonLabel: {
        fontFamily: fontFamily,
        fontSize: filterButtonFontSize,
        textAlign: 'center',
    },
    colors: {
        marginLeft: filterCategoryLeftMargin,
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
    },
    detectability: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    detectabilityText: {
        fontFamily: fontFamily,
        fontWeight: 'bold',
        fontSize: filterCategoryHeaderFontSize,
    },
    detectabilityButton: {
        borderWidth: 1,
        borderColor: filterButtonColor,
        height: filterDetectabilityButtonHeight,
        width: filterDetectabilityButtonWidth,
        borderRadius: filterDetectabilityButtonHeight / 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedBorder: {
        borderWidth: 1,
        borderColor: filterButtonColor,
    },
    selectedFill: {
        backgroundColor: filterButtonColor,
    },
});
