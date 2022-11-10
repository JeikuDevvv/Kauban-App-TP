import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const Logo = (prop) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder={prop.placeholder}
        placeholderTextColor={prop.colour4}
        secureTextEntry={prop.secureTextEntry}
        onChangeText={prop.onChangeText}
      />
      <Text style={styles.result}>{prop.result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputField: {
    backgroundColor: 'rgb(255, 182, 47)',
    textAlign: 'left',
    fontSize: 12,
    width: 320,
    height: 48,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'rgb(22, 22, 63)',
    fontFamily: 'Ubuntu-Regular',
  },
  result: {
    width: 288,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    fontSize: 12,
    justifyContent: 'center',
    fontFamily: 'Ubuntu-Regular',
  },
});
