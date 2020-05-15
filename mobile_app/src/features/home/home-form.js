import React from 'react';
import { View, Button } from 'react-native';
import PrimaryButton from '../../components/buttons/primary-button';

const HomeForm = ({navigation}) => {
  
  return (
      <View >       
       <Button title="Go to Subscription" 
        onPress={()=> navigation.navigate("Subscriptions")}/> 
        {/* <PrimaryButton title="Go to Subscription" navigation={navigation.navigate("Subscriptions")}/> */}
      </View>
    );
  }

export default HomeForm;