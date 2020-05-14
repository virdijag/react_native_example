import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <Button
            title="Register"
            onPress={() => {}}
            />
        </View>
    );
;}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
