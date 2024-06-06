// src/navigation/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SwaggerScreen from '../screens/SwaggerScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import TermsConditionsScreen from '../screens/TermsConditionsScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import AddAutoScreen from '../screens/AddAutoScreen';
import FindRideScreen from '../screens/FindRideScreen';
import MapContainer from '../screens/MapContainerScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

enableScreens();

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{
              title: 'Home Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen}
            options={{
              title: 'Login Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />          
          <Stack.Screen name="RiderReg" component={RegistrationScreen}
            options={{
              title: 'Rider Registration Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />   
           <Stack.Screen name="AddAuto" component={AddAutoScreen}
            options={{
              title: 'Add Auto Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          /> 
          <Stack.Screen name="MapContainer" component={MapContainer}
            options={{
              title: 'Find Rider Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />   
           <Stack.Screen name="MapScreen" component={MapScreen}
            options={{
              title: 'Map Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />  
           <Stack.Screen name="FindRider" component={FindRideScreen}
            options={{
              title: 'Find Rider Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />  
           <Stack.Screen name="Logout" component={LogoutScreen} options={{
            gestureEnabled: false, // Disable back and forward gestures
            title: 'Logout Screen',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }} />
          <Stack.Screen name="Profile" component={ProfileScreen}
            options={{
              title: 'Profile Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          /> 
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}
            options={{
              title: 'Reset Password Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />      
          <Stack.Screen name="Swagger" component={SwaggerScreen}
            options={{
              title: 'Swagger Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="ContactUs" component={ContactUsScreen}
            options={{
              title: 'Contact Us Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}
            options={{
              title: 'Privacy Policy Screen',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />
          {/* <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} /> */}
          <Stack.Screen name="TermsConditions" component={TermsConditionsScreen}
            options={{
              title: 'Terms and Conditions',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
