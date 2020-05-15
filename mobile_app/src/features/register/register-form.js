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


const RegisterForm = ({navigation}) => {

    const { register } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text_header}>Registeration</Text>
            </View>

        <View style={styles.footer}>
         
            <Text style={styles.text_footer}>Name</Text>
            <View style={styles.action}>
              
                <TextInput
                placeholder="First name"
                style={styles.textInput}
                autoCapitalize="none"
                />
                <Feather
                name="check-circle"
                color="green"
                size={2}
                />
            </View>         
            <View style={styles.action}>
              
              <TextInput
              placeholder="Last name"
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
            }>Email</Text>
             <View style={styles.action}>
              
              <TextInput
              placeholder="name@example.com"
              style={styles.textInput}
              autoCapitalize="none"
              />
              <Feather
              name="check-circle"
              color="green"
              size={2}
              />
          </View>       
      
            <View style={styles.button}>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {register()}}
                >
                <LinearGradient
                colors={['#348243','#348243']}
              
                style={styles.signIn}
                >
                    <Text style={[styles.textSign,{
                        color:'#fff'
                    }]}
                   
                    >Confirm</Text>
                    
                </LinearGradient>
                </TouchableOpacity>             
            </View>    
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}
                onPress={()=>{navigation.navigate("LoginScreen")}}>already registered?</Text>
            </TouchableOpacity>      
        </View>
           
           
        </View>
    );
;}

export default RegisterForm;

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