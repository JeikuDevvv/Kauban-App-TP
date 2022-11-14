/**
 * Copyright (c) 2022 TechnoPerfomance / Jeiku Dev
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { View, TextInput, Text, StyleSheet, Platform } from 'react-native';

export const InputField = (prop) => {
  return (
    <View style={prop.customStyle}>
      <View style={styles.mainContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyles}
            placeholder={prop.customPlaceholder}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType={prop.customContentType}
            value={prop.customValue}
            onChangeText={prop.customOnChangeText}
            keyboardType={prop.customKeboardType}
          />
        </View>
        <Text style={styles.result}>{prop.errorMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 60,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    backgroundColor: 'rgba(255, 182, 47, 0.5)',
    borderWidth: 1,
    borderRadius: 15,
    width: Platform.OS === 'ios' ? '90%' : '95%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgb(22, 22, 63)',
  },
  textInputStyles: {
    fontFamily: 'Poppins-Medium',
    padding: 14,
    width: '90%',
  },
  result: {
    width: Platform.OS === 'ios' ? 288 : 260,
    fontSize: Platform.OS === 'ios' ? 10 : 8,
    justifyContent: 'center',
    fontFamily: 'Poppins-LightItalic',
  },
});
