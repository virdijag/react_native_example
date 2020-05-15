import React from 'react';
import { View, Button } from 'react-native';

const HomeForm = ({navigation}) => {
  
  return (
      <View >       
        <Button title="Go to Subscription" 
        onPress={()=> navigation.navigate("Subscriptions")}/>
      </View>
    );
  }

export default HomeForm;