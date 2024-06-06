import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';


const MapContainerScreen = () => {
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  const [destination, setDestination] = useState('');
  const [destCoordinates, setDestCoordinates] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [pickupLocation, setPickupLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    // Retrieve current location when the component mounts   
    handlePickupLocation();
  }, []);
 

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


  const getDropOffCoordinates = async (destinationAddress) => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: destinationAddress,
          key: 'AIzaSyD9BKglPerterterRgxeqdllguSs2V67HMRphhLOqo',
        },
      });
  
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

  const fetchRoute = async () => {
    try {
      const destCoords = await getDropOffCoordinates(destination);
      console.log(destCoords)

      // To get Current Device Location
      //handlePickupLocation();
      console.log("pickupLocation.latitude :",pickupLocation.latitude);
      console.log("pickupLocation.longitude :",pickupLocation.longitude);

      if (destCoords) {
        setDestCoordinates(destCoords);
        const response = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
          params: {
            origin: `${pickupLocation.latitude},${pickupLocation.longitude}`,
            destination: `${destCoords.latitude},${destCoords.longitude}`,
            key: 'AIzaSyD9BKglPRgxeqderererllguSs2V67HMRphhLOqo',
          },
        });
     
        const { routes } = response.data;
        //console.log(" routes :",routes);
        if (routes && routes.length > 0) {
          const { overview_polyline } = routes[0];
          const points = overview_polyline.points;
          const routeCoords = decodePolyline(points);
          setRouteCoordinates(routeCoords);
        }
      }
    } catch (error) {
      console.error('Error fetching route:', error.message);
    }
  };

  const decodePolyline = (encoded) => {
    let poly = [];
    let index = 0, len = encoded.length;
    let lat = 0, lng = 0;

    while (index < len) {
      let b, shift = 0, result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
      lng += dlng;

      let point = { latitude: lat / 1E5, longitude: lng / 1E5 };
      poly.push(point);
    }
    return poly;
  };

  return (
    <View style={styles.container}>     
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={currentLocation} title="Current Location" />
        {destCoordinates && <Marker coordinate={destCoordinates} title="Destination Address" />}
        {routeCoordinates.length > 0 && <Polyline coordinates={routeCoordinates} />}
      </MapView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter destination address"
          value={destination}
          onChangeText={(text) => setDestination(text)}
        />
        <Button
          title="Get Directions"
          onPress={fetchRoute}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});

export default MapContainerScreen;
