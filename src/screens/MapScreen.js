import React from 'react';
import { View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = { latitude: 37.78825, longitude: -122.4324 }; // Example origin (San Francisco)
const destination = { latitude: 37.7749, longitude: -122.4194 }; // Example destination (San Francisco)

const GoogleApiKey = 'AIzaSyDLjeivhUDGCxrj4nkgqsdudocmtRtoCkE';

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={origin} title="Origin" />
        <Marker coordinate={destination} title="Destination" />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GoogleApiKey}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
      <Button title="Get Directions" onPress={() => console.log('Fetching directions...')} />
    </View>
  );
};

export default MapScreen;
