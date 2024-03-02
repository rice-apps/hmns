import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FilterSlideUp } from "../../components/FilterSlideUp";
import SafeView from "../../components/SafeView";
import { colors } from "../../constants/appColors";
import CardPopup from '../../components/CardPopup/CardPopup'; // Import CardPopup

interface ButterflyGlossaryType {
  name: string;
  genus: string;
  species: string;
  detectability: string;
  wingspanSize: string;
  color: string;
  img: string;
}


const mockButterflyData: ButterflyGlossaryType[] = [
	{name: "Green 2 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "small", color: "green", img: "../../assets/images/hmns-logo.png"},
	{name: "White 3 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "small", color: "white", img: "../../assets/images/hmns-logo.png"},
	{name: "Yellow 4 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "small", color: "yellow", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 5 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "medium", color: "green", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 6 Medium", genus: "something", species: "something", detectability: "medium", wingspanSize: "large", color: "green", img: "../../assets/images/hmns-logo.png"},
	{name: "Grey 8 High", genus: "something", species: "something", detectability: "high", wingspanSize: "large", color: "grey", img: "../../assets/images/hmns-logo.png"},
	{name: "Blue 3 High", genus: "something", species: "something", detectability: "high", wingspanSize: "small", color: "blue", img: "../../assets/images/hmns-logo.png"},
	{name: "Pink 4 High", genus: "something", species: "something", detectability: "high", wingspanSize: "small", color: "pink", img: "../../assets/images/hmns-logo.png"},
	{name: "Black 5 High", genus: "something", species: "something", detectability: "high", wingspanSize: "medium", color: "black", img: "../../assets/images/hmns-logo.png"},
	{name: "Brown 7 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "large", color: "brown", img: "../../assets/images/hmns-logo.png"},
	{name: "Brown 7 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "large", color: "brown", img: "../../assets/images/hmns-logo.png"},
	{name: "Green 1 Low", genus: "something", species: "something", detectability: "low", wingspanSize: "small", color: "green", img: "../../assets/images/hmns-logo.png"}
];

export default function Glossary() {
  const [filterVisible, setFilterVisible] = useState<boolean>(false);
  const [butterflyData, setButterflyData] = useState(mockButterflyData);
  const [isModalVisible, setModalVisible] = useState(false); // State to manage popup visibility

  const handleButterflyFilter = (filterSize, filterColor, filterDetectability) => {
    setButterflyData(mockButterflyData.filter(({ wingspanSize, color, detectability }) => {
      if (filterSize && wingspanSize !== filterSize) return false;
      if (filterColor && color !== filterColor) return false;
      if (filterDetectability && detectability !== filterDetectability) return false;
      return true;
    }));
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeView>
      {/* Viewable Page */}
      <View style={{width: '100%', padding: 20, paddingTop: 8}}>
        {/* Top Bar */}
        <View style={{flexDirection: 'row', height: 40, marginBottom: 12, gap: 8}}>
          <Pressable onPress={() => setFilterVisible(true)}>
            <Image source={require("../../assets/images/filter-icon.png")} style={{width: 40, height: 40}}/>
          </Pressable>
          
          <View style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12,
            borderColor: colors.mossyOak,
            backgroundColor: 'white',
          }}>
            <TextInput style={{flex: 1}} />
            <FontAwesome name="search" size={20} color="#000" />
          </View>
        </View>

        {/* Grid */}
		<FlatList
					numColumns={2}
					data={butterflyData}
					renderItem={({item}) => <ButterflyCard name={item.name} img={item.img} />}
					contentContainerStyle={{gap: 20, paddingTop: 10, paddingBottom: 5}}
					columnWrapperStyle={{justifyContent: "space-around"}}
					style={{height: "95%"}}
				/>
      </View>

      {/* Filter component */}
      <FilterSlideUp
        filterVisible={filterVisible}
        onFilter={handleButterflyFilter}
        onClose={() => setFilterVisible(false)}
      />

      {/* Popup for displaying the default butterfly */}
      <CardPopup visible={isModalVisible} onClose={toggleModal} />
    </SafeView>
  );
}

const ButterflyCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <View style={{
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: colors.mossyOak,
      backgroundColor: 'white',

    }}>
      <Image source={require("../../assets/images/hmns-logo.png")} style={{height: '70%', width: '90%', borderRadius: 20, marginTop: 3}} />
      <Text style={{textAlign: 'center', paddingTop: 5, color: colors.fossilRim}}>{name}</Text>
    </View>
  );
};