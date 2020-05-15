import React from 'react';
import { 
    View,  
    StyleSheet,
} from 'react-native';

import LoginForm from './login-form';

const LoginScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <LoginForm navigation={navigation} />           
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#348243'
     }  
  });