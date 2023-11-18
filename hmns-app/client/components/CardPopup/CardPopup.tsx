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
        <View style={styles.header}>
            <Text style={styles.species}>Mexican Sister</Text>
            
              <TouchableOpacity onPress={onClose}>
                <Image source={require('./closeIcon.png')} style={styles.closeIcon} />
              </TouchableOpacity>
              </View>
 
        
        <ScrollView 
            style={styles.details}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.scientificName}>Adelpha fessonia</Text>
          <Image
            source={require('./butterfly.png')}
            style={styles.image}
          />
            <DetailItem title="Origin" description="Neotropical" />
            <DetailItem title="Family" description="Nymphalidae (Brush-footed butterflies)" />
            <DetailItem title="Spotting likelihood" description="Low" />
            <DetailItem title="Wingspan" description="5-7 cm (2-2.5 in)" />
            <DetailItem title="Food source" description="Flowers" />
            <Text style={styles.funFactTitle}>Fun Fact</Text>
            <Text style={styles.funFactText}>
              They are often known as sisters, due to the white markings on their wings, which resemble a nun's habitat.
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
    padding: 35,
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
    borderRadius: 8,
    marginBottom: 8,
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
    alignSelf: 'flex-start',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#066FAB', 


  },
  scientificName: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#000', 
    marginBottom: 15,
    marginTop: 10,
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
});

export default CardPopup;
