import React from 'react';
import {     
    Text, 
    TouchableOpacity,    
    StyleSheet   
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../components/context';


const LoginButton = ({navigation}) => {

    const { login } = React.useContext(AuthContext);

    return (
        <TouchableOpacity style={styles.logIn} onPress={() => {login()}} >
            <LinearGradient colors={['#348243','#348243']} style={styles.logIn} >
                <Text style={[styles.textSign,{ color:'#fff' }]} >Log in</Text>
            </LinearGradient>
        </TouchableOpacity>     
    );
}

export default LoginButton;

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