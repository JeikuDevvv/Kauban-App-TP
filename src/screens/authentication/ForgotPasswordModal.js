/* eslint-disable indent */
/**
 * Copyright (c) 2022 TechnoPerfomance / Jeiku Dev
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Platform, SafeAreaView, Text, View } from 'react-native';

import { InputField } from '../../components/InputField';
import { PrimaryButton } from '../../components/PrimaryButton';
import { ForgotPasswordStyles } from './styles/ForgotPasswordStyles';

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
