
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const VehicleTypePicker = ({selectedValue, onValueChange}) => {

  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    const fetchVehicleTypes = async () => {
      try {          
        const response = axios.get(`${BASE_URL}/api/fetchvehicletypes`,{'Content-Type':'Application/json'})
        console.log((await response).data.fetchedVehicletypes);
        setVehicleTypes((await response).data.fetchedVehicletypes);   
      } catch (error) {
        console.error('Error fetching fetchedVehicleTypes:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchVehicleTypes();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading usertypes...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Vehicle" value="" style={styles.pickerText} />
        {vehicleTypes && vehicleTypes.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            value={item.type_name}
            label={item.type_name}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 240,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 14,
    height: 49,
    marginBottom: 6,
    marginTop: 6
  },
  pickerText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  tooltipContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default VehicleTypePicker;