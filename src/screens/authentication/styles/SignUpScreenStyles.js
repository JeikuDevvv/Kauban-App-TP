import { StyleSheet, Dimensions, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const SignUpScreenStyles = StyleSheet.create({
  ViewContainer: {
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  SafeAreaViewContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    backfaceVisibility: 'hidden',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  /* Body Style */
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  textViewContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    width: Dimensions.get('screen').width,
    height: '10%',
    marginBottom: '5%',
  },
  welcomeTextStyle: {
    fontSize: Platform.OS === 'ios' ? '29%' : 20,
    fontFamily: 'Poppins-Bold',
  },
  taglineTextStyle: {
    fontSize: Platform.OS === 'ios' ? '15%' : 12,
    fontFamily: 'Poppins-Italic',
  },
  textStyles: {
    color: '#16163F',
    letterSpacing: Platform.OS === 'ios' ? '2%' : 2,
    textShadowColor: 'rgba(241, 178, 74, 1)',
    textShadowOffset:
      Platform.OS === 'ios' ? { width: 1, height: 1 } : { width: 1, height: 1 },
    textShadowRadius: Platform.OS === 'ios' ? 0 : 1,
  },
  welcomeBudContainer: {
    direction: 'ltr',
    width: wp('80%'),
  },
  welcomeBudStyles: {
    height: Platform.OS === 'ios' ? 60 : 60,
    width: Platform.OS === 'ios' ? 120 : 120,
    resizeMode: 'contain',
  },
  inputFieldContainer: {
    width: Platform.OS === 'ios' ? '90%' : '90%',
    marginBottom: '5%',
  },
  ButtonStyles: {
    alignItems: 'center',
  },
  accountTextStyles: {
    fontSize: Platform.OS === 'ios' ? '15%' : 15,
    fontFamily: 'Poppins-Italic',
    color: 'rgba(0, 0, 0, 0.75)',
  },
  /* Footer */
  footerStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('9.5%'),
    width: Dimensions.get('screen').width,
    borderLeftWidth: 10,
    borderTopLeftRadius: 60,
    backgroundColor: 'rgb(207, 180, 137)',
    borderColor: 'rgba(255, 182, 47, 0.6)',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? '0%' : 25,
  },
  LinkTextStyles: {
    fontSize: Platform.OS === 'ios' ? '15%' : 10,
    color: 'rgba(0, 0, 0, 0.75)',
    fontFamily: 'Poppins-Bold',
  },
});
