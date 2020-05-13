// In App.js in a new project

import * as React from 'react';
import { 
  View,
  Text,
  SafeAreaView,
StyleSheet,
ScrollView,
StatusBar,
Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './app/screens/Home';
import SubscriptionScreen from './app/screens/Subscription';
import MainTabScreen from './app/screens/MainTab';


const Drawer = createDrawerNavigator();



const App = () => {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
     
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

export default App;