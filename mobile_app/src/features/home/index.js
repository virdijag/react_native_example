import React from 'react';
import { View } from 'react-native';
import HomeForm from './home-form';

const HomeScreen = ({navigation}) => {
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <HomeForm />
      </View>
    );
  }

export default HomeScreen;