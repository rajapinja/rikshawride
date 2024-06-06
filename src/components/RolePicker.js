import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../app/Config';
import {Picker} from '@react-native-picker/picker';


const RolePicker = ({ selectedValue, onValueChange}) => {
   const [roles, setRoles] = useState([]); 
   const [loading, setLoading] = useState(true);

   // Always get latest round number from DB 
   useEffect(() => {    

    const fetchRoles = async () => { 
      try {          
        const response = axios.get(`${BASE_URL}/api/roles`,{'Content-Type':'Application/json'})
        console.log((await response).data.userRoles);
        setRoles((await response).data.userRoles);   
      } catch (error) {
        console.error('Error fetching fetchedVehicleTypes:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };

    fetchRoles();    
  }, []);

 

    if (loading) {
      return <Text color="red">Loading roles...</Text>;
    }

  return (
    <View style={styles.input}>     
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select a role" value="" style={styles.pickerText}  />
            {roles.map((item, index) => (               
                <Picker.Item
                    style={styles.pickerText} 
                    key={index}  // Use a unique key, such as the index
                    label={item.role}  // Get the role name from the roleObject
                    value={item.role}  // Use the role name as the value
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
    marginTop:4
  },
  pickerText: {
    fontSize: 14,    
  },
  });
export default RolePicker;
