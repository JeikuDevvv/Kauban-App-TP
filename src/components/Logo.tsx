import React from 'react';
import { View, Image, Platform } from 'react-native';

export const Logo = (prop) => {
  return (
    <View
      style={[
        {
          height: '25%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        prop.customStyle,
      ]}
    >
      <Image
        source={require('../../assets/img/kauban_app_assets/kauban_app_logoText.png')}
        style={{
          height: Platform.OS === 'ios' ? 300 : 260,
          width: Platform.OS === 'ios' ? 300 : 260,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};
