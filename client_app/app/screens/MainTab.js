import React from 'react';
import { 
    View,
    Text,
   StyleSheet,
  Button } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import SubscriptionScreen from './Subscription';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from './Profile';


const HomeStack = createStackNavigator();
const SubscriptionStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: '#034824' }}
    
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor:'#034824',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Subscriptions"
      component={SubscriptionStackScreen}
      options={{
        tabBarLabel: 'Subscriptions',
        tabBarColor:'#034824',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="wallet" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:'#034824',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#034824'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      },
      
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Home',
      headerLeft: () => (
        <MaterialCommunityIcons color="#fff" name="menu" size={25} backgroundColor="#034824" 
        onPress={() =>  { navigation.openDrawer()}}/>
              )
    }} />
   
  </HomeStack.Navigator>
  );
  
  const SubscriptionStackScreen = ({navigation}) => (
    <SubscriptionStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#034824'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      }
  }}>
    <SubscriptionStack.Screen name="Subscriptions" component={SubscriptionScreen} options={{
      title:'Subscriptions',
      headerLeft: () => (
        <MaterialCommunityIcons color="#fff" name="menu" size={25} backgroundColor="#034824"
        onPress={() =>  { navigation.openDrawer()}}/>
              )
    }} />
   
  </SubscriptionStack.Navigator>
  );

  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#034824'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight: 'bold'
      },
      
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      title:'Profile',
      headerLeft: () => (
        <MaterialCommunityIcons color="#fff" name="menu" size={25} backgroundColor="#034824" 
        onPress={() =>  { navigation.openDrawer()}}/>
              )
    }} />
   
  </ProfileStack.Navigator>
  );

  export default MainTabScreen;