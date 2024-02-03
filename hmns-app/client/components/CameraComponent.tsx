import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import * as MediaLibrary from "expo-media-library";
import { StatusBar } from "react-native";


export default function CameraComponent() {
 const [hasPermission, setHasPermission] = useState(null);
 // State to store the captured photo
 const [photo, setPhoto] = useState(null);
 // Reference to the camera component
 const cameraRef = useRef(null);
 // Function to show photo-taking tips
 const showPhotoTips = () => {
   alert("Photo-taking Tips:\n1. Keep your hands steady.\n2. Make sure there's enough light.\n3. Focus on the butterfly you want to search up before taking the photo.");
 };
 const [confirmVisible, setConfirmVisible] = useState(false);


 // Request camera permissions when the component mounts
 useEffect(() => {
   (async () => {
     // Request camera permission
     const cameraStatus = await Camera.requestCameraPermissionsAsync();
     setHasPermission(cameraStatus.status === "granted");


     // Request media library permission
     const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
     if (mediaLibraryStatus.status !== "granted") {
       alert("Sorry, we need camera roll permissions to save the image!");
     }
   })();
 }, []);


 //   // Capture a photo and save it to photo album
 //   const takePhoto = async () => {
 //     if (cameraRef.current) {
 //         const options = { quality: 0.5, base64: true, skipProcessing: true };
 //         let newPhoto = await cameraRef.current.takePictureAsync(options);
 //         setPhoto(newPhoto);


 //         // Save the photo to the gallery
 //         const asset = await MediaLibrary.createAssetAsync(newPhoto.uri);
 //         await MediaLibrary.createAlbumAsync('HMNS', asset, false);  // Replace 'YourAppName' with your app's name or any other desired album name.
 //     }
 // };
 const takePhoto = async () => {
   if (cameraRef.current) {
     const options = { quality: 0.5, base64: true, skipProcessing: true };
     const newPhoto = await cameraRef.current.takePictureAsync(options);
     setPhoto(newPhoto);
     setConfirmVisible(true); // Show the confirmation screen
   }
 };


 // Retake the photo
 const retakePhoto = () => {
   setPhoto(null);
   setConfirmVisible(false); // Hide the confirmation screen
 };


 // Accept the photo and save it
 const acceptPhoto = async () => {
   if (photo) {
     try {
       // Save the photo to the gallery here
       const asset = await MediaLibrary.createAssetAsync(photo.uri);
       await MediaLibrary.createAlbumAsync("YourAppName", asset, false);
    
       // Handle any operation after saving the photo, such as navigation or state reset
       setConfirmVisible(false); // Hide confirmation screen
       setPhoto(null); // Reset photo state
     } catch (error) {
       // Handle any errors here
       console.error("Error saving photo", error);
       alert("Error saving photo");
     }
   }
 };


 // If confirmation screen should be visible, show the taken photo and options
 if (confirmVisible && photo) {
   return (
     <View style={styles.confirmContainer}>
       <Image source={{ uri: photo.uri }} style={styles.preview} />
       <View style={styles.confirmButtons}>
         <TouchableOpacity onPress={retakePhoto} style={styles.confirmButton}>
           <Text style={styles.confirmButtonText}>Retake</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={acceptPhoto} style={styles.confirmButton}>
           <Text style={styles.confirmButtonText}>Accept</Text>
         </TouchableOpacity>
       </View>
     </View>
   );
 }






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
           {/* Info Button */}
           <TouchableOpacity style={styles.tipsButton} onPress={showPhotoTips}>
               <FontAwesome
                   name='info-circle'
                   size={30}
                   color="white"
                   style={{ marginLeft: 15 }}
                 />
           </TouchableOpacity>
         </View>
                
         <View style={styles.bottomToolbar}>
           {/* Photo Button */}
           <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
             <View style={styles.captureButtonRing} />
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
   backgroundColor: "black",
 },
 camera: {
   flex: 1,
   justifyContent: "space-between",
 },
 uiContainer: {
   flex: 1,
   backgroundColor: "transparent",
   flexDirection: "column",
   justifyContent: "space-between",
 },
 topToolbar: {
   flex: 0.1,
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "flex-start",
   paddingTop: 20,
   paddingHorizontal: 20,
 },
 bottomToolbar: {
   padding: 20,
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "rgba(0, 0, 0, 0.5)"
 },
 captureButton: {
   width: 70,
   height: 70,
   borderWidth: 4,
   borderColor: "white",
   borderRadius: 35,
   backgroundColor: "white",
   alignSelf: "center",
   justifyContent: "center",
   alignItems:"center",
 },
 captureButtonRing: {
   width: 65,
   height: 65,
   borderWidth: 2,
   borderColor: "black",
   borderRadius: 32.5,
   position: "absolute",
 },
 galleryButton: {
   width: 50,
   height: 50,
   borderRadius: 10,
   alignSelf: "center",
   overflow: "hidden",
   backgroundColor: "white",
 },
 thumbnail: {
   width: 45,
   height: 45,
   backgroundColor: "transparent",
 },
 tipsButton: {
   position: 'absolute',
   borderRadius: 10,
   padding: 10,
   top: 20,
   left: 10,
 },
 confirmContainer: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
 confirmButtons: {
   flexDirection: "row",
   width: "100%",
   padding: 20,
 },
 confirmButton: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   marginHorizontal: 10,
   paddingVertical: 10,
   borderRadius: 5,
   backgroundColor: "rgba(0,0,0,0.5)",
 },
 preview: {
   width: "100%",
   height: "80%",
   borderRadius: 4,
 },
 confirmButtonText: {
   color: "white",
   fontSize: 18,
   textAlign: "center",
 },
});




