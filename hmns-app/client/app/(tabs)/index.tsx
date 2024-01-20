// TabOneScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text } from '../../components/Themed';
import CardPopup from '../../components/CardPopup/CardPopup';
import { FilterSlideUp } from '../../components/FilterSlideUp';

export default function TabOneScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState<string>("Tab One");
    const [filterVisible, setFilterVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <Button title="Show Popup" onPress={toggleModal} />
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <FilterSlideUp
                filterVisible={filterVisible}
                onFilter={(size, color, detect) => setText(`filtered: ${size} ${color} ${detect}`)}
                onClose={() => setFilterVisible(false)}
            />
            <Button title="Show filter" onPress={() => setFilterVisible(true)} />
            <EditScreenInfo path="app/(tabs)/index.tsx" />

            <CardPopup visible={isModalVisible} onClose={toggleModal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        marginVertical: 30,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        flex: 0.45,
    },
    camera: {
        flex: 1,
    },
});

