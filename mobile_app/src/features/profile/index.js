import React from 'react';
import { View } from 'react-native';

import ProfileForm from './profile-form';

const ProfileScreen = () => (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ProfileForm/>
    </View>
);

export default ProfileScreen;