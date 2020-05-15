import React from 'react';
import { 
    View,
    Text,
   StyleSheet,
  Button } from 'react-native';

const HomeForm = ({navigation}) => {
  
  return (
      <View >
        <Text>Home Screen</Text>
        <Button title="Go to Subscription" 
        onPress={()=> navigation.navigate("Subscriptions")}/>
      </View>
    );
  }

export default HomeForm;