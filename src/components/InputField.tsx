import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const InputField = (prop) => {
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
    backgroundColor: 'rgba(255, 182, 47, 0.5)',
    textAlign: 'left',
    fontSize: 12,
    width: 320,
    height: 48,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'rgb(22, 22, 63)',
  },
  result: {
    width: 288,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    fontSize: 12,
    justifyContent: 'center',
  },
});
