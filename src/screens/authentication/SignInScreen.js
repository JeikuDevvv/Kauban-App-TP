import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';

import { SignInScreenStyles } from './styles/SignInScreenStyles';
import { useAuth } from '../../contexts/Auth';
import { InputField } from '../../components/InputField';

import {
  checkStringContent,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../../functions/validationChecker';

export const SignInScreen = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <View style={SignInScreenStyles.container}>
      <Text>Sign In Screen</Text>
      <InputField
        placeholder="Enter your email address"
        onChangeText={(emailAddress) => {
          setEmailAddress(emailAddress);
        }}
      />
      <InputField
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(password) => {
          setPassword(password);
        }}
      />
      {loading ? (
        <ActivityIndicator color={'#000'} animating={true} size="small" />
      ) : (
        <Button title="Sign In" onPress={signIn} />
      )}
    </View>
  );
};
