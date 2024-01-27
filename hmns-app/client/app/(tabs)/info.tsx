import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10, // Use paddingHorizontal to apply left and right padding
    alignItems: 'flex-start', // Align children to the start of the cross-axis
  },
  headerImage: {
    width: '100%',
    height: 194,
    borderRadius: 5,
  },
  headerTitle: {
    marginTop: 20, // This will create a 45px gap from the bottom of the headerImage
    padding: 10,
    backgroundColor: 'transparent',
    fontSize: 20,
  },
  intro: {
    marginTop: 5, // This will create a 45px gap from the bottom of the headerTitle
    padding: 10,
    backgroundColor: 'transparent',
    fontSize: 15,
    lineHeight: 20,
  },
  // container: {
  //   paddingTop: 50,
  //   padding: 10,
  // },
  // // Style of header image
  // headerImage: {
  //   width: '100%',
  //   height: 194, // You should set a fixed height for images in React Native
  //   borderRadius: 5,
  // },
  // // Style of the header "about HMNS"
  // headerTitle: {
  //   position: 'absolute', // This positions the header relative to its first positioned (not static) ancestor element.
  //   width: 142,
  //   height: 50,
  //   top: 250,
  //   left: 26,
  //   padding: 10,
  //   backgroundColor: 'transparent', 
  //   fontSize: 20,
  // },
  // // Style of introduction to HMNS
  // intro:{
  //   position: 'absolute', // This positions the header relative to its first positioned (not static) ancestor element.
  //   width: 316,
  //   height: 100,
  //   top: 295,
  //   left: 26,
  //   padding: 10,
  //   backgroundColor: 'transparent', 
  //   fontSize: 15,
  //   lineHeight: 20,
  // },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  faqQuestion: {
    flex: 1, // Take up as much space as possible
  },
  faqAnswer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  // Add style for the toggle button (the chevron)
  toggleButton: {
    // Style your button here
  },
  // ... additional styles
});

// Simple FAQ item component
const FaqItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <TouchableOpacity onPress={toggleOpen} style={styles.faqItem}>
      <Text>{question}</Text>
      {isOpen && (
        <View style={styles.faqAnswer}>
          <Text>Answer to the question</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const InfoPage = () => {
  return (
    <View style={styles.container}>
      <Image
         source={require('./image8.png')} // Replace with your image path
        style={styles.headerImage}
      />
      <Text style={styles.headerTitle}>About HMNS</Text>

      <Text style={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      
      <TouchableOpacity style={styles.faqItem} onPress={toggleOpen}>
        <Text style={styles.faqQuestion}>{question}</Text>
        <Text style={styles.toggleButton}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {isOpen && <Text style={styles.faqAnswer}>{answer}</Text>}
      {/* <Text>FAQ's</Text>
      <FaqItem question="Lorem ipsum dolor sit amet" />
      <FaqItem question="Lorem ipsum dolor sit amet" />
      <FaqItem question="Lorem ipsum dolor sit amet" /> */}
      {/* ... more FAQ items */}

      
      {/* Bottom Navigation */}
      {/* ...your bottom navigation code */}
    </View>
  );
};

export default InfoPage;
