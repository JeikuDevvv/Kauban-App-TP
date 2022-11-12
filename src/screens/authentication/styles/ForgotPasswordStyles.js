import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ForgotPasswordStyles = StyleSheet.create({
  ViewContainer: {
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  SafeAreaViewContainer: {
    flex: 1,
  },
  /* Body Style */
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
    color: 'rgba(255, 255, 255, 0.50)',
    letterSpacing: Platform.OS === 'ios' ? '2%' : 2,
    textShadowColor: 'rgba(241, 178, 74, 1)',
    textShadowOffset:
      Platform.OS === 'ios' ? { width: 1, height: 1 } : { width: 1, height: 1 },
    textShadowRadius: Platform.OS === 'ios' ? 0 : 1,
  },
});
