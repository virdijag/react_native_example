import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainHeader = ({title}) => {

    return (
        <View style={styles.header}>
        <Text style={styles.text_header}>{title}</Text>
        </View>
    );
}

export default MainHeader;

const styles = StyleSheet.create({
   
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },  
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    }
  });