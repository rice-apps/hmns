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
    paddingLeft: 20,
    backgroundColor: 'transparent',
    fontSize: 20,
  },
  intro: {
    marginTop: 5, // This will create a 45px gap from the bottom of the headerTitle
    padding: 10,
    paddingLeft: 20,
    backgroundColor: 'transparent',
    fontSize: 16,
    lineHeight: 20,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#5D5544',
    paddingVertical: 15,
    paddingBottom: 10,
    width:340,
  },
  faqQuestion: {
    fontSize: 16,
    lineHeight: 20,
    width: 327,
    flex: 1,
    // paddingLeft: 20,
  },
  faqAnswer: {
    width: 340,
    padding: 5,
    backgroundColor: '#f0f0f0',
    paddingLeft: 20,
    fontSize: 15,
    lineHeight: 20,
  },
  toggleButton: {
    marginLeft: 10, // Space between the question and the button
  },
});

// Simple FAQ item component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the toggle function within the FaqItem component
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <View>
      {/* <TouchableOpacity style={styles.faqItem}></TouchableOpacity> */}
      <TouchableOpacity style={styles.faqItem} onPress={toggleOpen}>
        <Text style={styles.faqQuestion}>{question}</Text>
        <Text style={styles.toggleButton}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View>
          <Text style={styles.faqAnswer}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const InfoPage = () => {
 // Example FAQ data
 const faqs = [
  {
    question: "FAQ Question 1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "FAQ Question 2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "FAQ Question 3",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    question: "FAQ Question 4",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

return (
  <View style={styles.container}>
    <Image
      source={require('./image8.png')}
      style={styles.headerImage}
    />
    <Text style={styles.headerTitle}>About HMNS</Text>
    <Text style={styles.intro}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
    
    <View style={styles.faqContainer}>
        <Text style={styles.headerTitle}>FAQ's</Text>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </View>
  </View>
);
};

export default InfoPage;
