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

import MainTabScreen from './app/screens/MainTab';
import DrawerContent from './app/screens/DrawerContent';

import RootStackScreen from './app/screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const Home = () => {
  return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
 
  </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      
     
      <RootStackScreen/>

       {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
     
      </Drawer.Navigator> */}
      
     
    </NavigationContainer>
  );
}

export default App;