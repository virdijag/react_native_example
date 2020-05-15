import React from 'react';
import { Button } from 'react-native';

const PrimaryButton = ({title, navigation}) => {
  
  return (     
        <Button title={title} onPress={()=> {navigation}}/>    
    );
  }

export default PrimaryButton;