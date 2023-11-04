import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'react-native';

export default function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(null);
  // // State to manage the type of camera (front or back)
  // const [type, setType] = useState(Camera.Constants.Type.back);
  // State to store the captured photo
  const [photo, setPhoto] = useState(null);
  // Reference to the camera component
  const cameraRef = useRef(null);
  // Function to show photo-taking tips
  const showPhotoTips = () => {
    alert("Photo-taking Tips:\n1. Keep your hands steady.\n2. Make sure there's enough light.\n3. Focus on the butterfly you want to search up before taking the photo.");
  };

  // Request camera permissions when the component mounts
  useEffect(() => {
    (async () => {
        // Request camera permission
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasPermission(cameraStatus.status === 'granted');

        // Request media library permission
        const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
        if (mediaLibraryStatus.status !== 'granted') {
            alert('Sorry, we need camera roll permissions to save the image!');
        }
    })();
}, []);

  // Capture a photo and save it to photo album
  const takePhoto = async () => {
    if (cameraRef.current) {
        const options = { quality: 0.5, base64: true, skipProcessing: true };
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);

        // Save the photo to the gallery
        const asset = await MediaLibrary.createAssetAsync(newPhoto.uri);
        await MediaLibrary.createAlbumAsync('HMNS', asset, false);  // Replace 'YourAppName' with your app's name or any other desired album name.
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

  // Make sure to hide the status bar to provide a full-screen experience
  StatusBar.setHidden(true);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera}  ref={cameraRef}>
        {/* Overlay the UI components on the camera preview */}
        <View style={styles.uiContainer}>
          <View style={styles.topToolbar}>
            {/* You can add additional icons or information at the top */}
          </View>
          
          <View style={styles.bottomToolbar}>
            {/* Placeholder for gallery button/icon */}
            {photo && (
                <TouchableOpacity style={styles.galleryButton}>
                  <Image
                    source={{ uri: photo.uri }}
                    style={styles.thumbnail}
                  />
                </TouchableOpacity>
              )}
            <TouchableOpacity style={styles.captureButton} onPress={takePhoto} />
            
            
            
            <TouchableOpacity style={styles.tipsButton} onPress={showPhotoTips}>
              <Text style={styles.tipsButtonText}>Tips</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  uiContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topToolbar: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  bottomToolbar: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 35,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  flipButton: {
    alignSelf: 'center',
    flex: 0.1,
    alignItems: 'center',
  },
  galleryButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  tipsButton: {
    // Style your button as needed
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 10,
  },
  tipsButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

