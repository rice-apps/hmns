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
          <Text style={styles.species}>Mexican Sister</Text>
          <Text style={styles.scientificName}>Adelpha fessonia</Text>
          <Image
            source={require('./butterfly.png')}
            style={styles.image}
          />
          <ScrollView style={styles.details}>
            <DetailItem title="Origin" description="Neotropical" />
            <DetailItem title="Family" description="Nymphalidae (Brush-footed butterflies)" />
            <DetailItem title="Spotting likelihood" description="Low" />
            <DetailItem title="Wingspan" description="5-7 cm (2-2.5 in)" />
            <DetailItem title="Food source" description="Flowers" />
            <Text style={styles.funFactTitle}>Fun Fact</Text>
            <Text style={styles.funFactText}>
              They are often known as sisters, due to the white markings on their wings, which resemble a nun’s habitat.
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
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
    fontFamily: 'Inter',
  },
  funFactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
    fontFamily: 'Inter',
  },
  funFactText: {
    fontSize: 16,
    color: '#555',
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF', 
    margin: 8,
  },
  scientificName: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: '#50BFE6', 
    margin: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  detailDescription: {
    fontSize: 16,
    color: 'black',
    marginLeft: 4,
  },
});

export default CardPopup;
