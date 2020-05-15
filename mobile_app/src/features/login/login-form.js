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
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../components/context';

const LoginForm = ({navigation}) => {

    const { login } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
            </View>

        <View style={styles.footer}>
            {/* <Button
            title="Click"
            onPress={() => {}}
            /> */}
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                name="user-o"
                color="#05375a"
                size={20}
                />
                <TextInput
                placeholder="Email"
                style={styles.textInput}
                autoCapitalize="none"
                />
                <Feather
                name="check-circle"
                color="green"
                size={2}
                />
            </View>            
            <Text style={
                [styles.text_footer,{marginTop:35}]
            }>Password</Text>
            <View style={styles.action}>
                <FontAwesome 
                name="lock"
                color="#05375a"
                size={20}
                />
                <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
                />
                <TouchableOpacity>
                <Feather
                name="eye-off"
                color="grey"
                size={2}
                />
                </TouchableOpacity>
            </View>  
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}
                onPress={()=>{alert("forgot password screen")}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {login()}}
                >
                <LinearGradient
                colors={['#348243','#348243']}
              
                style={styles.signIn}
                >
                    <Text style={[styles.textSign,{
                        color:'#fff'
                    }]}
                   
                    >Log in</Text>
                    
                </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("RegisterScreen")}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Register</Text>
                </TouchableOpacity>
            </View>          
        </View>
           
           
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#348243'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
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