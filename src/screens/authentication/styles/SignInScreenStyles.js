import { StyleSheet, Dimensions } from 'react-native';

export const SignInScreenStyles = StyleSheet.create({
  ViewContainer: {
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  SafeAreaViewContainer: {
    flex: 1,
  },
});
