import React from 'react';
import {     
    Text, 
    TouchableOpacity,    
    StyleSheet   
} from 'react-native';

const RegisterButton = ({navigation}) => {
    
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate("RegisterScreen")}
        style={[styles.logIn, {
            borderColor: '#009387',
            borderWidth: 1,
            marginTop: 15
        }]}
    >
        <Text style={[styles.textSign, {
            color: '#009387'
        }]}>Register</Text>
    </TouchableOpacity>
    );
}

export default RegisterButton;

const styles = StyleSheet.create({
    
    logIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });