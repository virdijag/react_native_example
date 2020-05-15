import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Button,
    TextInput
} from 'react-native';

import EmailTextInput from '../../components/form/email-text-input';
import PasswordTextInput from '../../components/form/password-text-input';
import LoginButton from './login-button';
import RegisterButton from './login-register-button';

const LoginFooter = ({navigation}) => {

    return (
      
        <View style={styles.footer}>          
            <Text style={styles.text_footer}>Email</Text>
            <EmailTextInput />    
            <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
            <PasswordTextInput />
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}
                onPress={()=>{alert("forgot password screen")}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <LoginButton />
                <RegisterButton navigation={navigation} />  
            </View>
        </View>       
      
    );
}

export default LoginFooter;

const styles = StyleSheet.create({
    
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },  
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
      
    },
    signIn: {
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