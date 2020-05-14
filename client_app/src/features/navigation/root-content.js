import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../splash/index';
import LoginScreen from '../login/login-form';
import RegisterScreen from '../register/register-form';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>       
    </RootStack.Navigator>
);

export default RootStackScreen;