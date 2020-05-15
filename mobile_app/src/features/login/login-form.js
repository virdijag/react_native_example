import React from 'react';
import { 
    View,   
    StyleSheet,
  
} from 'react-native';

import MainHeader from '../../components/headers/main-header';
import LoginFooter from './login-footer';

const LoginForm = ({navigation}) => {
 
    return (
        <View style={styles.container}>          
            <MainHeader title="Welcome" />      
            <LoginFooter navigation={navigation} />           
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#348243'
    }
  });