import React from 'react';
import { 
    View,
    Text,
   StyleSheet,
  Button } from 'react-native';



const HomeScreen = ({navigation}) => {
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Subscription" 
        onPress={()=> navigation.navigate("Subscriptions")}/>
      </View>
    );
  }

export default HomeScreen;