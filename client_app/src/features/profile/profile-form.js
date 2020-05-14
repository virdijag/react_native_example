import React from 'react';
import { 
    View,
    Text,
   StyleSheet,
  Button } from 'react-native';


const ProfileScreen = ({navigation}) => (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
    <Button title="Go to Subscription" 
    onPress={()=> navigation.navigate("Subscriptions")}/>
  </View>
);

export default ProfileScreen;