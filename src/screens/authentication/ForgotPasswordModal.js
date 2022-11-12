/* eslint-disable indent */
import React from 'react';
import { Text, View, SafeAreaView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ForgotPasswordStyles } from './styles/ForgotPasswordStyles';
import { InputField } from '../../components/InputField';
import { PrimaryButton } from '../../components/PrimaryButton';

export const ForgotPasswordModal = () => {
  return (
    <SafeAreaView style={ForgotPasswordStyles.SafeAreaViewContainer}>
      <View style={ForgotPasswordStyles.ViewContainer}>
        <LinearGradient
          colors={
            Platform.OS === 'ios'
              ? [
                  'rgba(22, 22, 63, 1)',
                  'rgba(22, 22, 63, 0.5)',
                  'rgba(255, 182, 47, 0.5)',
                ]
              : ['#FFFFFF', 'rgba(255, 182, 47, 0.2)', 'rgb(255, 182, 47)']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={ForgotPasswordStyles.ViewContainer}
        >
          <View style={ForgotPasswordStyles.textViewContainer}>
            <Text
              style={[
                ForgotPasswordStyles.welcomeTextStyle,
                ForgotPasswordStyles.textStyles,
              ]}
            >
              forget password?
            </Text>
            <Text
              style={[
                ForgotPasswordStyles.taglineTextStyle,
                ForgotPasswordStyles.textStyles,
              ]}
            >
              Enter the email address you registered for your “Kauban App”
              account, and we will send you an email message with password reset
              information.
            </Text>
            <InputField customPlaceholder={'Enter your email address'} />
            <PrimaryButton />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
