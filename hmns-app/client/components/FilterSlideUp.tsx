import { useThemeColor } from "./Themed";
import { Modal, StyleSheet, View, Text, Pressable, DimensionValue } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { useState } from "react";

type ButterflySize = {
    displaySize: DimensionValue;
    value: string,
}

type ButterflyColor = {
    displayColor: string,
    value: string,
}

const fontFamily = 'sans-serif';
const filterCategoryFontSize = 16;
const filterTitleFontSize = 24;
const filterTitleLeftMargin = '5%';
const filterCategoryLeftMargin = '7%';
const filterButtonColor = 'grey';
const filterButtonFontSize = 20;

const sizes: ButterflySize[] = [{
    displaySize: 25,
    value: 'small',
}, {
    displaySize: 40,
    value: 'medium',
}, {
    displaySize: 55,
    value: 'large',
}];
const colors: ButterflyColor[] = [{
    displayColor: 'blue',
    value: 'blue'
}, {
    displayColor: 'red',
    value: 'red'
}, {
    displayColor: 'green',
    value: 'green'
}, {
    displayColor: 'purple',
    value: 'purple'
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
