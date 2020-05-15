import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Splash Screen</Text>
            <View style={styles.btn}>
            <Button style={styles.btn}
            title="Login"
            onPress={() => {navigation.navigate("LoginScreen")}}
            />
            </View>
            <View style={styles.btn}>
            <Button 
            title="Register"
            color="#348243"
            onPress={() => {navigation.navigate("RegisterScreen")}}
            />
            </View>
        </View>
    );
;}

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        width:'80%',
        margin:10,
        color:'#348243'
    }
});
