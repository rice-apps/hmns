import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

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
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.text}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text style={styles.text}>Flip</Text>
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
    buttonContainer: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
  
