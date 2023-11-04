// CardPopup.tsx
// helpful link
// https://chat.openai.com/share/1587c98f-b8b1-43a2-ac4e-1a49015a8909
import React from 'react';
import { Modal, StyleSheet, View, Text, TouchableOpacity, ModalProps } from 'react-native';

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
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text>Box 1</Text>
            </View>
            <View style={styles.box}>
              <Text>Box 2</Text>
            </View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Text>Box 3</Text>
            </View>
            <View style={styles.box}>
              <Text>Box 4</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  box: {
    width: '40%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    margin: 10,
    padding: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
  }
});

export default CardPopup;
