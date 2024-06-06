import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { LinearGradient } from 'expo-linear-gradient';

const HamburgerMenu = ({ showMenu, onPress, route, navigation, jwtToken, isAllowedRoute }) => {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.hamburger}>
        <Ionicons name="menu" size={65} color="#222"/>
      </TouchableOpacity>
      <Modal visible={showMenu} transparent={true} animationType="slide" onRequestClose={onPress}>       
        <LinearGradient
            colors={['rgba(79, 172, 254, 1)', 'rgba(254, 180, 123, 1)','rgba(255, 126, 95, 1)']}
            //colors={['rgba(39, 112, 194, 1)', 'rgba(204, 130, 83, 1)','rgba(204, 100, 64, 1)']}
            // Change these colors as per your gradient
            style={styles.modalContainer}
          >
           <ScrollView>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.closeButton}>CLOSE</Text>
            </TouchableOpacity>
            <View style={styles.menuItems}>
              {route.name === 'Home' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RazorPay')}><Text style={styles.menuText}>RazorPay</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration </Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapContainer')}><Text style={styles.menuText}>MapContainer</Text></TouchableOpacity>  
                </>
              )}
               {route.name === 'RiderReg' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity> 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>  
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity> 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapContainer')}><Text style={styles.menuText}>MapContainer</Text></TouchableOpacity>   
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapScreen')}><Text style={styles.menuText}>MapScreen</Text></TouchableOpacity>             
                </>
              )}  
                {route.name === 'AddAuto' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapContainer')}><Text style={styles.menuText}>MapContainer</Text></TouchableOpacity>  
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapScreen')}><Text style={styles.menuText}>MapScreen</Text></TouchableOpacity> 
                </>
              )} 
               {route.name === 'MapScreen' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapContainer')}><Text style={styles.menuText}>MapContainer</Text></TouchableOpacity>  
                </>
              )} 
              {route.name === 'FindRider' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>   
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapContainer')}><Text style={styles.menuText}>MapContainer</Text></TouchableOpacity>        
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapScreen')}><Text style={styles.menuText}>MapScreen</Text></TouchableOpacity>                        
                </>
              )} 
               {route.name === 'MapContainer' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>    
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MapScreen')}><Text style={styles.menuText}>MapScreen</Text></TouchableOpacity>              
                </>
              )} 
              {route.name === 'ContactUs' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                </>
              )}
              {route.name === 'PrivacyPolicy' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                </>
              )}
              {route.name === 'TermsConditions' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>                 
                </>
              )}               
              {route.name === 'Login' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ResetPassword')}><Text style={styles.menuText}>ResetPassword</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                </>
              )} 
               {route.name === 'ResetPassword' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}><Text style={styles.menuText}>Home</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                   <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}>Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              
               {route.name === 'Swagger' && (
                <>               
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )} 
              {route.name === 'Profile' && (
                <>                 
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}
              {isAllowedRoute && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Swagger')}><Text style={styles.menuText}>Swagger</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Logout')}><Text style={styles.menuText}>Logout</Text></TouchableOpacity>
                </>
              )}             
              {route.name === 'Logout' && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RiderReg')}><Text style={styles.menuText}>Registration</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AddAuto')}><Text style={styles.menuText}>AddAuto</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FindRider')}><Text style={styles.menuText}>FindRider</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}><Text style={styles.menuText}> Login</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}><Text style={styles.menuText}>Profile</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Menu')}><Text style={styles.menuText}>Menu</Text></TouchableOpacity>
                </>
              )} 
            </View>
          </View>
          </ScrollView>
        </LinearGradient>       
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  hamburger: {
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20, // Adjust padding as needed
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'black',
    fontSize: 21,
    fontWeight:'bold'
  },
  menuItems: {
    marginTop: 12,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1.5,
    // borderBottomColor: '#CCCCCC',
    borderBottomColor: 'white',
  },
  menuText: {
    //color: '#800080',
    //color: '#000080',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    
   
  }  
});


export default HamburgerMenu;
