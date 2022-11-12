import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Platform,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTogglePasswordVisibility } from '../functions/useTogglePasswordVisibility';

export const InputFieldPassword = (prop) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  return (
    <View style={prop.customStyle}>
      <View style={styles.mainContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyles}
            placeholder={prop.customPlaceholder}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={prop.customValue}
            onChangeText={prop.customOnChangeText}
          />
          <Pressable
            onPress={handlePasswordVisibility}
            style={{ marginRight: 14 }}
          >
            <Icon name={rightIcon} size={22} color="rgb(22, 22, 63)" />
          </Pressable>
        </View>
        <Text style={styles.result}>{prop.result}</Text>
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
