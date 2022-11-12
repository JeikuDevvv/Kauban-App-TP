import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { SignUpScreenStyles } from './styles/SignUpScreenStyles';
import { WavyHeader } from '../../components/WavyHeader';

export const SignUpScreen = () => {
  return (
    <SafeAreaView style={SignUpScreenStyles.SafeAreaViewContainer}>
      <View style={SignUpScreenStyles.ViewContainer}>
        <LinearGradient
          colors={
            Platform.OS === 'ios'
              ? ['#FFFFFF', '#FFFFFF', 'rgba(255, 182, 47, 1)']
              : ['#FFFFFF', 'rgba(255, 182, 47, 0.2)', 'rgb(255, 182, 47)']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={SignUpScreenStyles.ViewContainer}
        >
          {/* ------ */}
          <WavyHeader customStyles={SignUpScreenStyles.svgCurve} />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
