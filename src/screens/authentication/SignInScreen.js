/**
 * Copyright (c) 2022 TechnoPerfomance / Jeiku Dev
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { SignInScreenStyles } from './styles/SignInScreenStyles';
import { useAuth } from '../../contexts/Auth';
import { WavyHeader } from '../../components/WavyHeader';
import { PrimaryButton } from '../../components/PrimaryButton';
import { KaubanHeader } from '../../components/KaubanHeader';
import { InputField } from '../../components/InputField';
import { InputFieldPassword } from '../../components/InputFieldPassword';

export const SignInScreen = () => {
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [loading, isLoading] = useState(false);
  const auth = useAuth();
  const signIn = async () => {
    isLoading(true);
    await auth.signIn();
  };

  return (
    <SafeAreaView style={SignInScreenStyles.SafeAreaViewContainer}>
      <View style={SignInScreenStyles.ViewContainer}>
        <LinearGradient
          colors={
            Platform.OS === 'ios'
              ? ['#FFFFFF', '#FFFFFF', 'rgba(255, 182, 47, 1)']
              : ['#FFFFFF', 'rgba(255, 182, 47, 0.2)', 'rgb(255, 182, 47)']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={SignInScreenStyles.ViewContainer}
        >
          {/* ------ */}
          <WavyHeader customStyles={SignInScreenStyles.svgCurve} />
          <KaubanHeader
            customOnPress={() => {
              navigation.navigate('SignUp Screen');
            }}
          />

          <View style={SignInScreenStyles.textViewContainer}>
            <Text
              style={[
                SignInScreenStyles.welcomeTextStyle,
                SignInScreenStyles.textStyles,
              ]}
            >
              Sign In to Kauban App
            </Text>
            <Text
              style={[
                SignInScreenStyles.taglineTextStyle,
                SignInScreenStyles.textStyles,
              ]}
            >
              Welcome Back!{' '}
            </Text>
          </View>
          <Image
            style={SignInScreenStyles.gradBudStyles}
            source={require('../../../assets/img/Authentication/undraw_graduation_re_gthn.png')}
          />
          <View style={SignInScreenStyles.inputFieldContainer}>
            <InputField
              customPlaceholder={'Enter email address'}
              customValue={emailAddress}
              customOnChangeText={(emailAddress) => {
                setEmailAddress(emailAddress);
              }}
            />
            <InputFieldPassword
              customPlaceholder={'Enter password'}
              customValue={password}
              customOnChangeText={(password) => {
                setPassword(password);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword Modal');
            }}
          >
            <Text
              style={[
                { marginBottom: '15%' },
                SignInScreenStyles.forgetPassTextStyles,
              ]}
            >
              forget password?
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              { marginBottom: '1%' },
              SignInScreenStyles.forgetPassTextStyles,
            ]}
          >
            Dont have an account yet?{' '}
            <Text
              style={{ textDecorationLine: Platform.OS === 'ios' ? 1 : null }}
              onPress={() => {
                navigation.navigate('SignUp Screen');
              }}
            >
              Sign Up
            </Text>
          </Text>

          {loading ? (
            <ActivityIndicator
              color={'#16163F'}
              animating={true}
              size="small"
            />
          ) : (
            <PrimaryButton
              customTextHolder={'      SIGN IN'}
              customIconName={'sign-in'}
              customStyles={SignInScreenStyles.ButtonStyles}
              customOnPress={signIn}
            />
          )}
          <View style={SignInScreenStyles.footerStyles}>
            <Text style={SignInScreenStyles.LinkTextStyles}>
              Powered by: Jeiku Dev
            </Text>
            <Text> </Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
