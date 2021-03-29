import "react-native-gesture-handler";
import React, { Component } from 'react';
import {
  NavigationContainer, Button
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Screen/Splash';
import Home from './Screen/Home';
import Blood_Doner_Navigation from './Screen/Blood_Doner_Navigation';
import Emergency_Blood from './Screen/Emergency_Blood';
import login from "./Screen/login";
import Doctor_login from "./Screen/Doctor_login";
import Doctor_signup from "./Screen/Doctor_signup";
import signup from "./Screen/signup";
import Blood_bank_login from "./Screen/Blood_bank_login";
import Blood_bank_signup from "./Screen/Blood_bank_signup";
import Blood_Camp_Details from "./Screen/Blood_Camp_Details";
import Emergency_cancel from "./Screen/Emergency_cancel";
import Emergency_navigation from "./Screen/Emergency_navigation";
import Blood_bank_navigation from "./Screen/Blood_bank_navigation";
import Blood_camp_cancel from "./Screen/Blood_camp_cancel";
import Emergency_message from "./Screen/Emergency_message";
import Doctor_update from "./Screen/Doctor_update";
import message_data from "./Screen/message_data";


const Stack = createStackNavigator();


export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false
          }} />
          <Stack.Screen name="login" component={login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Signup" component={signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Doctor_login" component={Doctor_login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Doctor_Signup" component={Doctor_signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Camp_login" component={Blood_bank_login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Camp_Signup" component={Blood_bank_signup} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Emergency_Blood" component={Emergency_Blood} options={{
            title: "Emergency Blood",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Message" component={message_data} options={{
            title: "Emergency Message",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Emegency_cancel" component={Emergency_cancel} options={{
            title: "Emergency Cancel",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Emergency_message" component={Emergency_message} options={{
            title: "Emergency Message",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Blood_Cancel" component={Blood_camp_cancel} options={{
            title: "Blood Camp Cancel",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Emergency" component={Emergency_navigation} options={{
            title: "Emergency",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Doctor" component={Doctor_update} options={{
            title: "Doctor",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Blood_navigation" component={Blood_bank_navigation} options={{
            title: "Blood Camp",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Donor_navigation" component={Blood_Doner_Navigation} options={{
            title: "Blood Donor",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          

          {/* <Stack.Screen name="Blood Doner" component={Blood_donor} options={{
            headerShown: false
          }} /> */}
          <Stack.Screen name="Blood_Camp_Details" component={Blood_Camp_Details} options={{
            title: "Blood Camp Details",
            headerStyle: {
              backgroundColor: '#ff0038',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }
}
