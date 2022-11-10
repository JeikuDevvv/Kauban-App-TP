import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { LandingScreenStyles } from './styles/LandingScreenStyles';
import { WavyHeader } from '../../components/WavyHeader';
import { Logo } from '../../components/Logo';
import { PrimaryButton } from '../../components/PrimaryButton';

export const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={LandingScreenStyles.SafeAreaViewContainer}>
      <View style={LandingScreenStyles.ViewContainer}>
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF', '#FFB62F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={LandingScreenStyles.ViewContainer}
        >
          {/* ------ */}
          <WavyHeader customStyles={LandingScreenStyles.svgCurve} />
          <Logo customStyle={LandingScreenStyles.logoStyles} />
          <View style={LandingScreenStyles.textViewContainer}>
            <Text
              style={[
                LandingScreenStyles.welcomeTextStyle,
                LandingScreenStyles.textStyles,
              ]}
            >
              Welcome to Kauban App
            </Text>
            <Text
              style={[
                LandingScreenStyles.taglineTextStyle,
                LandingScreenStyles.textStyles,
              ]}
            >
              collaboration | innovation | socialization{' '}
            </Text>
          </View>
          <PrimaryButton
            customTextHolder={'      GET STARTED'}
            customIconName={'hand-o-up'}
            customStyles={LandingScreenStyles.ButtonStyles}
            customOnPress={() => navigation.navigate('SignIn Screen')}
          />
          <Image
            source={require('../../../assets/img/Authentication/undraw_team_collaboration_re_ow29.png')}
            style={LandingScreenStyles.collabImageStyles}
          />
          <View style={LandingScreenStyles.footerStyles}>
            <Text style={LandingScreenStyles.LinkTextStyles}>
              Read our{' '}
              <Text
                style={[
                  { textDecorationLine: 'underline' },
                  LandingScreenStyles.InnerLinkTextStyles,
                ]}
              >
                Privacy Policy
              </Text>
            </Text>
            <Text style={LandingScreenStyles.LinkTextStyles}>
              By tapping "Get Started" you agree to our{' '}
              <Text
                style={[
                  { textDecorationLine: 'underline' },
                  LandingScreenStyles.InnerLinkTextStyles,
                ]}
              >
                Terms & Policies
              </Text>
            </Text>
            <Text>{''}</Text>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
