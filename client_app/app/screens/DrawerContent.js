import React from 'react';
import { View,StyleSheet } from 'react-native';
  import {
   
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

 
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  export default function DrawerContent(props){
      return(
          <View style={{flex:1}}>
              <DrawerContentScrollView {...props}>
                <View style={{flex:1}}>
                   <View style={styles.userInforSection}>
                       <View style={{flexDirection:'row',marginTop:15, marginLeft:15}}>
                           <Avatar.Image
                           source={{
                               uri:'https://image.flaticon.com/icons/png/512/219/219970.png'

                           }}
                           size={50}
                           />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                           <Title style={styles.title}>Jag Virdi</Title>
                           <Caption style={styles.caption}>Digital Wallet</Caption>
                       </View>
                       <View style={styles.row}>

                        </View>            
                       </View>
                                  
                   </View>                   
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                    icon={({color,size}) => (
                        <Icon
                        name="home-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home')}}
                    />

<DrawerItem 
                    icon={({color,size}) => (
                        <Icon
                        name="account-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem 
                    icon={({color,size}) => (
                        <Icon
                        name="wallet-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Subscriptions"
                    onPress={() => {props.navigation.navigate('Subscriptions')}}
                    />
                  

                   <DrawerItem 
                    icon={({color,size}) => (
                        <Icon
                        name="settings-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Settings"
                    onPress={() => {}}
                    />
                     <DrawerItem 
                    icon={({color,size}) => (
                        <Icon
                        name="account-check-outline"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Support"
                    onPress={() => {}}
                    />
              </Drawer.Section>
              
              </DrawerContentScrollView>
              <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                    icon={({color,size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {}}
                    />
              </Drawer.Section>
          </View>
      );
  }

  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });