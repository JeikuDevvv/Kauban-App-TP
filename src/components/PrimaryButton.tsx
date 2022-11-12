import React from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PrimaryButton = (prop) => {
  return (
    <View style={prop.customStyles}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          height: hp('7w%'),
          width: wp('70%'),
          backgroundColor: 'rgb(22, 22, 63)',
        }}
        onPress={prop.customOnPress}
      >
        <View
          style={{
            left: '0%',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            height: hp('7w%'),
            width: wp('15%'),
            borderWidth: 1,
            borderColor: 'rgb(22, 22, 63)',
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            backgroundColor: 'rgb(255, 182, 47)',
          }}
        >
          <Icon
            name={prop.customIconName}
            color={'rgb(22, 22, 63)'}
            style={{ fontSize: 25 }}
          />
        </View>
        <Text
          style={{
            color: 'rgb(255, 182, 47)',
            fontSize: Platform.OS === 'ios' ? '25%' : 18,
            fontFamily: 'Poppins-Medium',
          }}
        >
          {prop.customTextHolder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
