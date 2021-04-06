import React from 'react';
import { View, Image } from 'react-native';
export default function coreComponent() {
    return (
        <View>
            <Image style={{width:'100%',height:300}} source={{uri: 'https://www.themesine.com/wp-content/uploads/2018/01/logo-full.png'}} />
        </View>
    );
}
