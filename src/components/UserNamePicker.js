
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BASE_URL } from '../app/Config';
import axios from 'axios';

const UserNamePicker = ({selectedValue, onValueChange}) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {

    const fetchUsers = async () => {
      try {          
        const response = axios.get(`${BASE_URL}/api/fetchusers`,{'Content-Type':'Application/json'})
        console.log((await response).data.fetchedUsers);
        setUsers((await response).data.fetchedUsers);   
      } catch (error) {
        console.error('Error fetching users:', error.message);
      } finally {
        // Set loading to false when the process is complete
        setLoading(false);
      }
    };
    
    fetchUsers();
    
  }, []);

  
  if (loading) {
    return <Text color="red">Loading Users...</Text>;
  }

  return (
    <View style={styles.input}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        <Picker.Item label="Select Users" value="" style={styles.pickerText} />
        {users && users.map((item, index) => (
          <Picker.Item
            style={styles.pickerText}
            key={index}
            value={item.userid}
            label={item.name}
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

export default UserNamePicker;
