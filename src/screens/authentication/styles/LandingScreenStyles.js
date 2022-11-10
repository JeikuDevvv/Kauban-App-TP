import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const LandingScreenStyles = StyleSheet.create({
  ViewContainer: {
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  SafeAreaViewContainer: {
    flex: 1,
  },
  /* Body Style */
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  logoStyles: {
    backgroundColor: 'transparent',
  },
  textViewContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    width: Dimensions.get('screen').width,
    height: '10%',
  },
  welcomeTextStyle: {
    fontSize: '29%',
    fontFamily: 'Poppins-Bold',
  },
  taglineTextStyle: {
    fontSize: '15%',
    fontFamily: 'Poppins-Italic',
  },
  textStyles: {
    letterSpacing: '2%',
    textShadowColor: 'rgba(241, 178, 74, 0.75)',
    textShadowOffset: { width: 1, height: 0.5 },
    textShadowRadius: 0,
  },
  ButtonStyles: {
    paddingTop: '15%',
  },
  collabImageStyles: {
    height: Platform.OS === 'ios' ? 377 : 260,
    width: Platform.OS === 'ios' ? 400 : 260,
    resizeMode: 'contain',
  },
  /* Footer */
  footerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('9.5%'),
    width: Dimensions.get('screen').width,
    borderLeftWidth: 10,
    borderTopLeftRadius: 60,
    backgroundColor: 'rgba(22, 22, 63, 0.2)',
    borderColor: 'rgba(255, 182, 47, 0.6)',
    position: 'absolute',
    bottom: '0%',
  },
  LinkTextStyles: {
    color: 'rgba(22, 22, 63, 0.75)',
  },
  InnerLinkTextStyles: {
    color: 'rgba(22, 22, 63, 1)',
  },
});
