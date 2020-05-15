import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileForm = ({navigation}) => (

    <View>
      <Text>Profile Screen</Text>
      <Button title="Go to Subscription" onPress={()=> navigation.navigate("Subscriptions")}/>
    </View>
);

export default ProfileForm;