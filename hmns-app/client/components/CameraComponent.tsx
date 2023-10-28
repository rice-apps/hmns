import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(null);
  // State to manage the type of camera (front or back)
  const [type, setType] = useState(Camera.Constants.Type.back);
  // State to store the captured photo
  const [photo, setPhoto] = useState(null);
  // Reference to the camera component
  const cameraRef = useRef(null);

  // Request camera permissions when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);  

  // Capture a photo
  const takePhoto = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
    }
  };

  // If permissions are still being requested, return an empty view
  if (hasPermission === null) {
    return <View />;
  }
  // If camera access is denied, inform the user
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={cameraRef}>
    <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePhoto} />
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Ionicons name="camera-reverse-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
    </Camera>
    {photo && (
      <Image 
        source={{ uri: photo.uri }}
        style={{ width: 100, height: 100, position: 'absolute', top: 20, right: 20 }} // Adjust as needed
      />
    )}
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    camera: {
      flex: 1,
      width: '100%', // Ensure camera takes the full width of the screen
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',   // <-- Set position to absolute
      bottom: 20,             // <-- Define how far from the bottom it should be
      width: '100%',          // <-- Make it span the entire width of the parent
      paddingHorizontal: 20   // <-- Add some horizontal padding
    },
    captureButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: 'white',
      margin: 10,
      borderWidth: 6,
      borderColor: '#AAAAAA'
    },
    flipButton: {
      margin: 10
    },
  });