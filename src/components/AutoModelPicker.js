
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const AutoModelPicker = ({selectedValue, onValueChange}) => {

  const [autoModels, setAutoModels] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    const fetchAutoModels = async () => {
      try {          
        const response = axios.get(`${BASE_URL}/api/fetchautomodels`,{'Content-Type':'Application/json'})
        console.log((await response).data.fetchedAutoModel);
        setAutoModels((await response).data.fetchedAutoModel);   
      } catch (error) {
        console.error('Error fetching automodels:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchAutoModels();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading autoModels...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Auto Model" value="" style={styles.pickerText} />
        {autoModels && autoModels.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            value={item.model}
            label={item.model}
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

export default AutoModelPicker;
