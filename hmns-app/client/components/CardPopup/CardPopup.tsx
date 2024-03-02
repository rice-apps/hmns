// CardPopup.tsx
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ModalProps,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

interface CardPopupProps extends ModalProps {
  onClose: () => void;
}

const images = [
  require('./butterfly.png'),
  require('./butterfly.png'),
  require('./test.png'),
  require('./closeIcon.png'),
  require('./closeIcon.png'),
  require('./closeIcon.png'),
  require('./closeIcon.png'),
];

const infoData = [
  { icon: require('./detectability_icon.png'), title: 'Detectability', value: 'Low' },
  { icon: require('./origin_icon.png'), title: 'Origin', value: 'Neotropical' },
  { icon: require('./wingspan_icon.png'), title: 'Wingspan', value: '5-7cm' },
  { icon: require('./food_icon.png'), title: 'Food', value: 'Flowers' },
];

const CardPopup: React.FC<CardPopupProps> = ({ visible, onClose, ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <View >
      <Image source={item} style={styles.carouselImage} resizeMode="stretch" />
      </View>
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    
      {...props}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView style={styles.details} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <Text style={styles.commonName}>Mexican Sister</Text>
              <TouchableOpacity onPress={onClose}>
              <Image source={require('./closeIcon.png')} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.scientificName}>Adelpha fessonia</Text>
            <Text style={styles.familyName}>Family: Papilionidae Swallowtail</Text>  
           
            <Carousel
              data={images}
              renderItem={renderItem}
              sliderWidth={320}
              itemWidth={320}
              loop={true}
              onSnapToItem={(index) => setActiveSlide(index)}
              />
      <Pagination
          dotsLength={images.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

          <View style={styles.attributesContainer}>
          {infoData.map((item, index) => (
            <InfoItem
              key={index}
              iconName={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
          </View>

            <Text style={styles.funFactTitle}>Fun Fact</Text>
            <Text style={styles.funFactText}>
              They are often known as sisters, due to the white markings on their wings, which resemble a nun's habit.
            </Text>

            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginVertical: 19,
              }}
            />
            <Text style={styles.similarButterfliesTitle}>Similar Butterflies</Text>
            <View style={styles.similarButterfliesContainer}>
              <Image source={require('./butterfly.png')} style={styles.similarButterflyImage} />
              <Image source={require('./butterfly.png')} style={styles.similarButterflyImage} />
              <Image source={require('./butterfly.png')} style={styles.similarButterflyImage} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
  

const InfoItem = ({ iconName, title, value }) => {
  return (
    <View style={styles.attributeItem}>
      <View style={styles.iconTitleContainer}>
        <Image source={iconName} style={styles.infoIcon} />
        <Text style={styles.infoTitle}>{title}</Text>
      </View>
      <View style={styles.infoValueContainer}> 
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    height: '80%',
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingTop: 18,
    paddingHorizontal: 13,
    alignItems: 'center',
    elevation: 5,
    borderColor: "#9D9B64",
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 12,
    marginTop: 18,
  },
  details: {
    alignSelf: 'stretch',
    
  },
  funFactTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 8,
    color: '#000',
  },
  funFactText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 25,
    fontWeight: "400"
  },
  commonName: {
    fontSize: 26,
    marginBottom: 4,
    color: '#5D5544', 
  },
  familyName: {
    color: '#5D5544',
    marginTop: 3,
  },
  scientificName: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#5D5544', 
  },
  similarButterfliesTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 19,
    color: '#000',
  },
  similarButterfliesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  similarButterflyImage: {
    width: "30%", 
    height: 100,   
    borderRadius: 8,
    resizeMode: "cover"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  closeIcon: {
    width: 30,
    height: 30,
    padding:10 
  },
  attributeItem: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 2,
    marginHorizontal: 4,
    borderRadius: 16,
    borderColor: "black",
    flexGrow: 1, 
    margin: 4,
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginBottom: 2
  
  },
  infoTitle: {
    fontSize: 10,
    color: '#7F7F7F',
    alignContent:"center"
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  attributesContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    flexDirection: 'row', 
    borderRadius: 20,
    borderColor: '#D6D5B9', 
    borderWidth: 2,   
    padding: 1
  },
  carouselImage: {
    height: 200,
    width: "100%",
    borderRadius: 15,
    marginTop: 18,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#B8B691',
    marginHorizontal: 2,
  },
  activeDotStyle: {
    backgroundColor: '#5D5544',
  },

  iconTitleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 4,
    minHeight: 30, // Adjust this value as needed to fit your design
  },
  
  infoValueContainer: {
    flex: 1, // This will make the container grow to fill available space, pushing the title up
    justifyContent: 'center', // Center the content vertically within the container
    alignItems: 'center', // Center the content horizontally
    width: '100%', // Ensure the container takes up the full width of its parent
  },
  

});

export default CardPopup;
