import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const EmailTextInput = () => {
  
  return (     
    <View style={styles.action}>
      <FontAwesome name="user-o" color="#05375a" size={20} />
      <TextInput placeholder="Email" style={styles.textInput} autoCapitalize="none" />
      <Feather name="check-circle" color="green" size={2} />
    </View>       
    );
  }

export default EmailTextInput;

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