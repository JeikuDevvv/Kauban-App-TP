/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { SignUpScreenStyles } from './styles/SignUpScreenStyles';
import { WavyHeader } from '../../components/WavyHeader';
import KaubanHeader from '../../components/KaubanHeader';
import { InputField } from '../../components/InputField';
import { InputFieldPassword } from '../../components/InputFieldPassword';
import { PrimaryButton } from '../../components/PrimaryButton';

export const SignUpScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={SignUpScreenStyles.SafeAreaViewContainer}>
      <View style={SignUpScreenStyles.ViewContainer}>
        <LinearGradient
          colors={
            Platform.OS === 'ios'
              ? ['#FFFFFF', '#FFFFFF', 'rgba(255, 182, 47, 1)']
              : ['#FFFFFF', 'rgba(255, 182, 47, 0.2)', 'rgb(255, 182, 47)']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={SignUpScreenStyles.ViewContainer}
        >
          {/* ------ */}
          <WavyHeader customStyles={SignUpScreenStyles.svgCurve} />
          <KaubanHeader
            customOnPress={() => {
              navigation.navigate('Landing Screen');
            }}
          />

          <View style={SignUpScreenStyles.textViewContainer}>
            <Text
              style={[
                SignUpScreenStyles.welcomeTextStyle,
                SignUpScreenStyles.textStyles,
              ]}
            >
              Sign Up to Kauban App
            </Text>
            <Text
              style={[
                SignUpScreenStyles.taglineTextStyle,
                SignUpScreenStyles.textStyles,
              ]}
            >
              We're glad that you are doing this!{' '}
            </Text>
          </View>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 2 }}
            style={SignUpScreenStyles.scrollViewContainer}
            scrollEnabled
          >
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <View style={SignUpScreenStyles.welcomeBudContainer}>
                <Image
                  style={SignUpScreenStyles.welcomeBudStyles}
                  source={require('../../../assets/img/Authentication/undraw_welcome_cats_thqn.png')}
                />
              </View>
              <View style={SignUpScreenStyles.inputFieldContainer}>
                <InputField
                  customPlaceholder={'Enter your first name'}
                  customValue={firstName}
                  customOnChangeText={(firstname) => {
                    setFirstName(firstname);
                  }}
                />
                <InputField
                  customPlaceholder={'Enter your last name'}
                  customValue={lastName}
                  customOnChangeText={(lastname) => {
                    setLastName(lastname);
                  }}
                />
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
                <InputFieldPassword
                  customPlaceholder={'Confirm password'}
                  customValue={confirmPassword}
                  customOnChangeText={(confirmpassword) => {
                    setConfirmPassword(confirmpassword);
                  }}
                />
              </View>
            </View>
            <View style={SignUpScreenStyles.ButtonStyles}>
              <Text
                style={[
                  { marginBottom: '1%' },
                  SignUpScreenStyles.accountTextStyles,
                ]}
              >
                Already have an account?{' '}
                <Text
                  style={{
                    textDecorationLine: Platform.OS === 'ios' ? 1 : null,
                  }}
                  onPress={() => {
                    navigation.navigate('SignIn Screen');
                  }}
                >
                  Sign In
                </Text>
              </Text>
              <PrimaryButton
                customTextHolder={'      GET STARTED'}
                customIconName={'user-plus'}
                customStyles={SignUpScreenStyles.ButtonStyles}
                customOnPress={() => {
                  alert('nain');
                }}
              />
            </View>
          </KeyboardAwareScrollView>
          <View style={SignUpScreenStyles.footerStyles}>
            <Text style={SignUpScreenStyles.LinkTextStyles}>
              Powered by: Jeiku Dev
            </Text>
            <Text> </Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
