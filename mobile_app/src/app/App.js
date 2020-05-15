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

import BottomTabMenu  from '../features/navigation/bottom-tab-content';
import SideMenu from '../features/navigation/drawer-content';
import RootNavMenu from '../features/navigation/root-content';
import {AuthContext} from '../components/context';

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
           <RootNavMenu/>          
      )
      :
      <Drawer.Navigator drawerContent={props => <SideMenu {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={BottomTabMenu} /> 
      </Drawer.Navigator> 
       }

      {/* {userToken === null ? (
         <RootStackScreen/>
      )
      :
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />     
    </Drawer.Navigator> 
     
       } */}
     
     
    
     
    </NavigationContainer>
  </AuthContext.Provider>
  );
}

export default App;