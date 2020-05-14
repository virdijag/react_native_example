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
import {AuthContext} from './app/components/context';
const Drawer = createDrawerNavigator();


const App = () => {

  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    login:() => {
      setUserToken('sometoken');
    }, 
    signout: () => {
      setUserToken(null);
    },
    register: () => {
      setUserToken('sometoken');
    }
  }));

  return ( 
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

      {userToken === null ? (
         <RootStackScreen/>
      )
      :
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />     
    </Drawer.Navigator> 
     
       }
     
     
    
     
    </NavigationContainer>
  </AuthContext.Provider>
  );
}

export default App;