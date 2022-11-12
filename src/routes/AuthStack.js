import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from '../screens/authentication/LandingScreen';
import { SignUpScreen } from '../screens/authentication/SignUpScreen';
import { SignInScreen } from '../screens/authentication/SignInScreen';
import { ForgotPasswordModal } from '../screens/authentication/ForgotPasswordModal';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Landing Screen" component={LandingScreen} />
        <Stack.Screen name="SignUp Screen" component={SignUpScreen} />
        <Stack.Screen name="SignIn Screen" component={SignInScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="ForgotPassword Modal"
          component={ForgotPasswordModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
