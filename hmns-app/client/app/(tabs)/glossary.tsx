import { Button, View } from "react-native";
import { FilterSlideUp } from '../../components/FilterSlideUp';
import { useState } from "react";
import SafeView from "../../components/SafeView";

export default function Glossary(){
    const [filterVisible, setFilterVisible] = useState<boolean>(false);
    return (
        <SafeView>
            <FilterSlideUp
                filterVisible={filterVisible}
                onFilter={(size, color, detect) => /* do whatever on filter here */ 0}
                onClose={() => setFilterVisible(false)}
            />
            <Button title="Show filter" onPress={() => setFilterVisible(true)} />
        </SafeView>
    );
}

