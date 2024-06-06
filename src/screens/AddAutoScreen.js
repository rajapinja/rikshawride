import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { BASE_URL, PROJECT_NAME } from '../app/Config';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import GradientButton from '../components/GradientButton';
import backgroundImage from '../images/whitebg.jpg';
import AutoModelPicker from '../components/AutoModelPicker';
import UserNamePicker from '../components/UserNamePicker';
import DateTimePicker from '@react-native-community/datetimepicker';


function AddAutoScreen({ navigation }) {

    const [vehicleRegNumber, setVehicleRegNumber] = useState('');
    const [selectedAutoModel, setSelectedAutoModel] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');
    const [registrationDate, setRegistrationDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false); // Initially show date picker


    useEffect(() => {
        // Clear error messages when the component is mounted or navigated back to
        const unsubscribe = navigation.addListener('focus', () => {
            setErrorMessages({});
        });

        return unsubscribe;
    }, [navigation]);


    const validateRegistrationNumber = (text) => {
        // Define the pattern for allowed characters
        const allowedCharsPattern = /^[a-zA-Z0-9_-]+$/;
        if (!allowedCharsPattern.test(text)) {
            return 'Registration Number should not contain special characters';
        }
        return null; // No error
    };   

    const handleUserSelection = (newValue) => {
        console.log("newValue :", newValue);
        setSelectedUser(newValue)
        setSelectedUserId(newValue)
    }

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setShowDatePicker(Platform.OS === 'ios');       
        setRegistrationDate(currentDate);
    };

    const handleAddAuto = () => {

        // Create an object containing registration data   
        const errors = {};

        const userError = validateRegistrationNumber(vehicleRegNumber)
        if (userError) {
            errors.vehicleRegNumber = userError;
        }

        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
        } else {

            console.log('registrationDate :',registrationDate)
            const addAutoData = {
                vehicleRegNumber: vehicleRegNumber,
                registrationDate: registrationDate.toISOString().split('T')[0],
                selectedAutoModel: selectedAutoModel,
                selectedUserId: selectedUser
            };
            axios.post(`${BASE_URL}/api/addauto`, JSON.stringify(addAutoData), {
                headers: { 'Content-Type': 'application/json', }
            })
                .then(response => {
                    console.log("message :", response.data.message);
                    setVehicleRegNumber('');
                    //setStatusCode(response.status);
                }).catch(error => {
                    console.log('error :', error)
                    //navigation.navigate('Home');
                });
        }
    };

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
                                    <TextInput
                                        placeholder="Vehicle Reg Number"
                                        placeholderTextColor="black"
                                        onChangeText={setVehicleRegNumber}
                                        style={[styles.inputUser, { color: '#333333' }]} // Set the text color to black
                                    />
                                    {errorMessages.vehicleRegNumber && <Text style={styles.errorText}>{errorMessages.vehicleRegNumber}</Text>}
                                    <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
                                        <Text>Reg Date: {registrationDate.toDateString()}</Text>
                                    </TouchableOpacity>
                                        {showDatePicker && (
                                            <DateTimePicker
                                                value={registrationDate}
                                                mode="date"
                                                display="default"
                                                onChange={handleDateChange}
                                            />
                                        )}
                                    <AutoModelPicker
                                        selectedValue={selectedAutoModel}
                                        onValueChange={setSelectedAutoModel}
                                    />
                                    <UserNamePicker
                                        selectedValue={selectedUserId}
                                        onValueChange={(itemValue, itemIndex) => handleUserSelection(itemValue)}
                                    />
                                    <View style={styles.buttonRow}>
                                        <GradientButton
                                            onPress={handleAddAuto}
                                            title={'ADD~VEHICLE'}
                                            colors={['#0000FF', '#50C878']}
                                            start={{ x: 0, y: 1 }}
                                            end={{ x: 1, y: 0 }}
                                            buttonStyle={styles.buttonReg} />
                                    </View>
                                    {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                                    {errorMessage !== '' && <Text style={styles.errorText}>Error: {errorMessage} </Text>}
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
        height: 48,
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

export default AddAutoScreen;
