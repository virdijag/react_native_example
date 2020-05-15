import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const PasswordTextInput = () => {
  
  return (     
    <View style={styles.action}>
      <FontAwesome name="lock" color="#05375a" size={20} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" />
      <TouchableOpacity>
        <Feather name="eye-off" color="grey" size={2} />
      </TouchableOpacity>
    </View>     
    );
  }

export default PasswordTextInput;

const styles = StyleSheet.create({
     
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  }
});