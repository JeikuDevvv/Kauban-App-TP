import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
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
              navigation.navigate('Landing Screen');
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
            <InputField customPlaceholder={'Enter email address'} />
            <InputFieldPassword customPlaceholder={'Enter password'} />
          </View>
          <TouchableOpacity
            onPress={() => {
              alert('Forget Password!');
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
          <TouchableOpacity
            onPress={() => {
              alert('Dont have account!');
            }}
          >
            <Text
              style={[
                { marginBottom: '1%' },
                SignInScreenStyles.forgetPassTextStyles,
              ]}
            >
              Dont have an account yet? Sign Up
            </Text>
          </TouchableOpacity>
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
