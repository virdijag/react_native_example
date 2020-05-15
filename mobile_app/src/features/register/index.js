import React from 'react';
import { View, StyleSheet } from 'react-native';

import RegisterForm from './register-form';

const RegisterScreen = ({navigation}) => {
   
    return (
        <View style={styles.container}>          
           <RegisterForm navigation={navigation} />
        </View>
    );
;}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#348243'
    }
});