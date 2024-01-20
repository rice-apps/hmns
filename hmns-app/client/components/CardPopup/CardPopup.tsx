// CardPopup.tsx
import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ModalProps,
  Image,
  ScrollView,
} from 'react-native';


interface CardPopupProps extends ModalProps {
  onClose: () => void;
}

const infoData = [
  { icon: require('./butterfly.png'), title: 'Detectability', value: 'Low' },
  { icon: require('./butterfly.png'), title: 'Origin', value: 'Neotropical' },
  { icon: require('./butterfly.png'), title: 'Wingspan', value: '5-7cm' },
  { icon: require('./butterfly.png'), title: 'Food', value: 'Flowers' },
];

const CardPopup: React.FC<CardPopupProps> = ({ visible, onClose, ...props }) => {
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
              <Text style={styles.species}>Mexican Sister</Text>
              <TouchableOpacity onPress={onClose}>
                <Image source={require('./closeIcon.png')} style={styles.closeIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.scientificName}>Adelpha fessonia</Text>
            <Text style={styles.familyName}>Family: Papilionidae Swallowtail</Text>  
            <Image source={require('./butterfly.png')} style={styles.image} />

<View style={styles.container}>
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
const DetailItem = ({ title, description }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailTitle}>{title}:</Text>
    <Text style={styles.detailDescription}>{description}</Text>
  </View>
);

const InfoItem = ({ iconName, title, value }) => {
  return (
    <View style={styles.infoItemContainer}>
      <Image source={iconName} style={styles.infoIcon} />
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTitle}>{title}</Text>
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
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 18,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: 'center',
    elevation: 5,
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
    marginBottom: 8,
    marginTop: 18,
  },
  details: {
    alignSelf: 'stretch',
    
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  funFactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 8,
    color: '#066FAB',
  },
  funFactText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 28
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  species: {
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
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#616161',
  },
  detailDescription: {
    fontSize: 16,
    color: '#000',
    marginLeft: 2,
  },
  similarButterfliesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 21,
    marginBottom: 11,
    color: '#066FAB',
  
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
  },
  infoItemContainer: {
    flex: 1, // Ensures the item takes up an equal portion of the container
    flexDirection: 'column', // Layout the icon, title, and value on top of each other
    alignItems: 'center', // Center-align the items horizontally
    justifyContent: 'center', // Center-align the items vertically
    padding: 8,
    marginHorizontal: 4,
    backgroundColor: '#EFEFEF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingHorizontal: 16, // Add padding if needed
    
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  infoTextContainer: {
    flexDirection: 'column',
  },
  infoTitle: {
    fontSize: 12,
    color: '#555',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },

   infoList: {
    flexDirection: 'row',
    marginTop: 16,
  },
  container: {
    height: 80, // Assign a fixed height
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Make sure it takes the full width
    flexDirection: 'row', // This is now redundant, can be removed
    borderRadius: 20,
    borderColor: '#9D9B64', // Debugging: border color
    borderWidth: 2,   
    padding: 10
  },

});

export default CardPopup;
