import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { PROJECT_NAME } from '../app/Config';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import backgroundImage from '../images/whitebg.jpg';
import * as Location from 'expo-location';
import axios from 'axios';


const FindRideScreen = () => {

  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropOffLocation, setDropOffLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  //const [destinationAddress, SetDestinationAddress] = useState(null)

  const handlePickupLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Location permission denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setPickupLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };  

 // Function to handle user input for drop-off location
 const handleDropOffLocation = async () => {
    try {
      // Request permission to access device location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location permission required');
        return;
      }

      // Get current device location
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Set the obtained location as drop-off location
      setDropOffLocation({ latitude, longitude });
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error getting location');
    }
  };

  const getDropOffCoordinates = async (destinationAddress) => {
    try {
      // Make a request to the Google Maps Geocoding API
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: destinationAddress,
          key: 'AIzaSyDLjeivhUDGCxrj4nkgqsdudocmtRtoCkE', // Replace with your actual API key
        },
      });
  
      // Extract the coordinates from the API response
      const { results } = response.data;
      if (results && results.length > 0) {
        const { geometry } = results[0];
        const { location } = geometry;
        const { lat, lng } = location;
        return { latitude: lat, longitude: lng };
      } else {
        throw new Error('No results found for the destination address.');
      }
    } catch (error) {
      console.error('Error retrieving drop-off coordinates:', error.message);
      return null;
    }
  };

//Example usage
const destinationAddress = 'Swagath Grand, Komaplly, Hyderabad, 500067, India'; // Example destination address
getDropOffCoordinates(destinationAddress)
  .then((coordinates) => {
    if (coordinates) {
      console.log('Drop-off coordinates:', coordinates);
       // Set the obtained location as drop-off location
       setDropOffLocation(coordinates);
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
});


return (
    <>
        <View style={styles.backgroundGradientBanner}>
            <GradientBanner text={PROJECT_NAME} />
        </View>
        <ImageBackground source={backgroundImage} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.pageContent}>
                        <Text style={styles.title}>Add Vehicle Details</Text>
                        <View style={styles.transparentBox}>
                            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                                <Text style={[styles.inputUser, { color: '#333333' }]}>
                                    Current Location: {JSON.stringify(currentLocation)}
                                </Text>  
                                <View style={styles.buttonRow}>
                                    <GradientButton
                                        onPress={handlePickupLocation}
                                        title={'PICK~UP~LOCATION'}
                                        colors={['#0000FF', '#50C878']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        buttonStyle={styles.buttonReg} />
                                </View>
                                <Text style={[styles.inputUser, { color: '#333333' }]}>
                                    Pickup Location: {pickupLocation ? JSON.stringify(pickupLocation) : 'Not set'}
                                </Text>
                                <View style={styles.buttonRow}>
                                    <GradientButton
                                        onPress={handleDropOffLocation}
                                        title={'DROP~OFF~LOCATION'}
                                        colors={['#0000FF', '#50C878']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        buttonStyle={styles.buttonReg} />
                                </View>                               
                                <Text style={[styles.inputUser, { color: '#333333' }]}>
                                    Drop-off Location: {dropOffLocation ? JSON.stringify(dropOffLocation) : 'Not set'}
                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </ImageBackground>
    </>
);
}

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
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
},
scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
},
pageContent: {
    flex: 1, // Ensure content fills the remaining space
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center'
},
title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    color: 'black'
},
input: {
    width: 240,
    padding: 10,
    borderWidth: 1, // Apply border
    borderColor: 'black', // Border color
    borderRadius: 5, // Border radius
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
    height: 68,
    color: '#333333'
},
inputUser: {
    width: 240,
    padding: 10,
    borderWidth: 1, // Apply border
    borderColor: 'black', // Border color
    borderRadius: 5, // Border radius
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 16,
    height: 49,
    color: '#333333'
},
buttonContainer: {
    borderRadius: 15, // Border radius 
    width: '52%',
    padding: 10,
    fontSize: 50,
    marginBottom: 20,
},
errorText: {
    color: '#8B0000',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500'
},
buttonRow: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 10,
},
buttonReg: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: 240,
    marginBottom: 16,
    backgroundColor: '#007AFF'
},
transparentBox: {
    width: 340,
    height: 'auto',
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'center',
}
});

export default FindRideScreen;

