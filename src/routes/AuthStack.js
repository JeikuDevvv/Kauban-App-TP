import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from '../screens/authentication/LandingScreen';
import { SignUpScreen } from '../screens/authentication/SignUpScreen';
import { SignInScreen } from '../screens/authentication/SignInScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing Screen" component={LandingScreen} />
      <Stack.Screen name="SignUp Screen" component={SignUpScreen} />
      <Stack.Screen name="SignIn Screen" component={SignInScreen} />
    </Stack.Navigator>
  );
};
