import React from 'react';
import { View } from 'react-native';
import HomeForm from './home-form';
import Header from '../../components/headers/screen-header';

const HomeScreen = ({navigation}) => {
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header title="Home Screen"/>
       <HomeForm navigation={navigation}/>
      </View>
    );
  }

export default HomeScreen;