/**
 * Copyright (c) 2022 TechnoPerfomance / Jeiku Dev
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import { useAuth } from '../contexts/Auth';

export const HomeScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};
