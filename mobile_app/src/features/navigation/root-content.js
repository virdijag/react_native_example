import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../splash/index';
import LoginScreen from '../login/index';
import RegisterScreen from '../register/index';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>       
    </RootStack.Navigator>
);

export default RootStackScreen;