import React from 'react';
import { View, Text } from 'react-native';

import { LandingScreenStyles } from './styles/LandingScreenStyles';

export const LandingScreen = () => {
  return (
    <View style={LandingScreenStyles.container}>
      <Text>LandingScreen</Text>
    </View>
  );
};
