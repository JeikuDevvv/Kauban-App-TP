import React, { useState } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';

import { SignInScreenStyles } from './styles/SignInScreenStyles';
import { useAuth } from '../../contexts/Auth';

export const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <View style={SignInScreenStyles.container}>
      <Text>Sign In Screen</Text>
      {loading ? (
        <ActivityIndicator color={'#000'} animating={true} size="small" />
      ) : (
        <Button title="Sign In" onPress={signIn} />
      )}
    </View>
  );
};
