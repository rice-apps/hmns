import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10, // Use paddingHorizontal to apply left and right padding
    //alignItems: 'flex-start', // Align children to the start of the cross-axis
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
    fontWeight: '500',
    color: '#5D5544',

  },
  intro: {
    marginTop: 5, // This will create a 45px gap from the bottom of the headerTitle
    padding: 10,
    paddingLeft: 20,
    backgroundColor: 'transparent',
    fontSize: 14,
    lineHeight: 20,
    width: 380,
    color: '#5D5544',
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight:20,
    borderBottomWidth: 1,
    borderBottomColor: '#5D5544',
    paddingVertical: 15,
    paddingBottom: 10,
    // width:370,
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    // marginLeft: 20,
    // marginRight:20,
    // width: 370,
    flex: 1,
    color: '#5D5544',
    // paddingLeft: 20,
  },
  faqAnswer: {
    // width: 370,
    padding: 5,
    backgroundColor: 'transparent',
    paddingLeft: 20,
    fontSize: 14,
    lineHeight: 20,
    marginRight:20,
    color: '#5D5544',
  },
  toggleButton: {
    marginRight: 10, // Space between the question and the button
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
    question: "Can I take my stroller in to the butterfly center?",
    answer: "Unfortunately strollers and wagons are not allowed in the butterfly center, as they pose an escape risk for butterflies. There is a designated stroller parking area at the entrance to the butterfly center.",
  },
  {
    question: "Is the butterfly center accessible?",
    answer: "Yes, the butterfly center is fully accessible.",
  },
  {
    question: "Can I touch the butterflies?",
    answer: "We kindly ask that guests refrain from touching the butterflies, plants, and other wildlife in the butterfly center.",
  },
  {
    question: "Can I take pictures in the butterfly center?",
    answer: "Photography and videography are allowed inside the butterfly center. However, tripods and selfie sticks are prohibited.",
  },
  {
    question: "Can I go in to the butterfly center at any time?",
    answer: "Due to capacity and popularity, we ask that all guests adhere to their ticketed times for entry. However, once you are inside the rainforest, please feel welcome to explore as long as you would like.",
  },
  {
    question: "Can I release a butterfly, or adopt one to take home with me?",
    answer: "Because the butterfly center is a USDA-APHIS facility, federal regulation prohibit bringing in or removing any plant or animal material. However, with our Butterfly Flight School, you can release one of our newly-emerged butterflies for its maiden voyage in the rainforest conservatory! Available for on-site purchase only.",
  },
];

return (
  <ScrollView 
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 70 }} // Adjust the paddingBottom as needed
      >
    <Image
      source={require('./image8.png')}
      style={styles.headerImage}
    />
    <Text style={styles.headerTitle}>About HMNS</Text>
    <Text style={styles.intro}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </Text>
    
    <View style={styles.faqContainer}>
        <Text style={styles.headerTitle}>FAQ's</Text>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </View>
  </ScrollView>
);
};

export default InfoPage;
