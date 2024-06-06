import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {PROJECT_NAME} from '../app/Config';
import GradientBanner from '../components/Header';
import backgroundImage from '../images/whitebg.jpg';
import Footer from '../components/Footer';


const HomeScreen = ({ navigation }) => {  

  const route = useRoute();
 
  const handleContactUsPress = () => {
    navigation.navigate('ContactUs');
  };

  const handlePrivacyPolicyPress = () => {
    navigation.navigate('PrivacyPolicy');
  };

  const handleTermsConditionsPress = () => {
    navigation.navigate('TermsConditions');
  };

  return (
    <>
    <View style={styles.backgroundGradientBanner}>
        <GradientBanner text={PROJECT_NAME} />     
    </View>
    <ImageBackground source={backgroundImage} style={styles.background}>    
      <ScrollView>
      <View style={styles.overlay}/>   
        <View style={styles.container}>       
          <Text style={styles.title}>Home Screen Overview</Text>
          <Section title="User Registration" style={styles.sectionTitle}>
        <Text style={styles.sectionText}>
          Users download the RikshawRide app from the app store and register for an account. They provide personal information such as name, email, phone number, and payment details.
        </Text>
      </Section>
      <Section title="Finding a Ride" style={styles.sectionTitle}>
        <Text style={styles.sectionText}>
          When users need transportation, they open the app and specify their pickup and drop-off locations. The app then uses GPS to identify their current location and available nearby vehicles.
        </Text>
      </Section>
      <Section title="Driver Matchmaking" style={styles.sectionTitle}>
        <Text style={styles.sectionText}>
          The app matches the user's request with nearby drivers or vehicle owners who are available to provide the service. Users can view details such as driver's name, vehicle type, and estimated arrival time.
        </Text>
      </Section>

      <Section title="Ride Confirmation">
        <Text>
          Users confirm their ride request, and the driver receives a notification with the user's pickup location. The driver can choose to accept or reject the ride based on their availability and proximity.
        </Text>
      </Section>

      <Section title="Ride Experience">
        <Text>
          Once the ride is accepted, users can track the driver's location in real-time on the app map. The driver picks up the user from the specified location and transports them to their destination.
        </Text>
      </Section>

      <Section title="Payment">
        <Text>
          After completing the ride, the app calculates the fare based on factors like distance traveled, time taken, and any additional charges. Users can pay for the ride through the app using various payment methods, including credit/debit cards, digital wallets, or cash.
        </Text>
      </Section>

      <Section title="Rating and Feedback">
        <Text>
          Both riders and drivers have the opportunity to rate each other and provide feedback after completing the ride. This helps maintain service quality and accountability within the platform.
        </Text>
      </Section>

      <Section title="Driver Earnings">
        <Text>
          Drivers receive earnings from the fares they generate, minus any applicable commissions or service fees charged by the TNC. Payment to drivers is typically processed periodically, either daily or weekly, depending on the platform.
        </Text>
      </Section>

      <Section title="Safety and Support">
        <Text>
          TNCs implement safety features such as driver background checks, vehicle inspections, and real-time tracking to ensure a secure ride experience. Users can also access customer support through the app in case of any issues or emergencies during the ride.
        </Text>
      </Section>

      <Section title="Continuous Improvement">
        <Text>
          RikshawRide continuously update their apps and services based on user feedback, technological advancements, and regulatory changes to enhance the overall user experience and maintain competitiveness in the market.
        </Text>
      </Section>
          
        </View>
        <View style={styles.section}>          
        </View> 
         {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleContactUsPress}>
            <Text style={styles.footerLink} >Contact Us</Text>
          </TouchableOpacity>          
        </View>
        <View style={styles.footer}>        
          <TouchableOpacity  onPress={handlePrivacyPolicyPress}>
            <Text style={styles.footerLink}  >Privacy Policy</Text>
          </TouchableOpacity>          
        </View>
        <View style={styles.footer}>
          <TouchableOpacity  onPress={handleTermsConditionsPress}>
            <Text style={styles.footerLink}  >Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </ImageBackground>
    </>
  );
};

const Section = ({ title, children }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundGradientBanner: {
    backgroundColor: '#FFFFFF', // Half white color
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Scale the image to cover the entire screen
    justifyContent: 'center', // Center vertically
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  }, 
  title: {
    fontSize: 22,
    textShadowColor: "blue",
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:16,
  },
  section: {
    marginTop: 6 
  },
  topRight: {
    position: 'absolute',
    top: 2,
    right: 0,
    zIndex: 999,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: 'black', // Set your desired text color here
  },
  buttonTheme: {
    height: 20,
    backgroundColor: 'gray',
    width: 50,
    borderRadius: 13,
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'darkgray', // Example text color
    fontSize: 12,
    fontWeight: 'bold',
  },
   heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: -40
  },
  boldText: {
    fontWeight: '700'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 16,
    marginLeft: 16,
    alignItems: 'center'
  },
  footerLink: {
    fontSize: 36,
    color: 'blue',
    textDecorationLine: 'underline',  
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  content: {
    fontSize: 15,
    marginBottom: 10,
    color:'black'
  },
  bulletPoints: {
    marginLeft: 20,
    marginBottom: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)' // Adjust the alpha value (0.5) to control the opacity of the overlay
  },
  step: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 15,
  },
});


export default HomeScreen;
