import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export const KaubanHeader = (prop) => {
  return (
    <View style={[{ top: '2%', marginBottom: '10%' }, prop.customStyle]}>
      <LinearGradient
        colors={
          Platform.OS === 'ios'
            ? [
                'rgba(22, 22, 63, 0.75)',
                'rgba(255, 182, 47, 0.75)',
                'rgba(255, 182, 47, 0.5)',
              ]
            : ['#FFFFFF', 'rgba(255, 182, 47, 0.2)', 'rgb(255, 182, 47)']
        }
        style={styles.headerContainer}
      >
        <TouchableOpacity
          onPress={prop.customOnPress}
          style={styles.IconStyles}
        >
          <Icon
            name={'chevron-left'}
            color={'rgb(22, 22, 63)'}
            style={{ fontSize: 30 }}
          />
        </TouchableOpacity>
        <Image
          style={{ left: '-70%' }}
          source={require('../../assets/img/kauban_app_assets/header/kauba-app-text.png')}
        />
        <Image
          source={require('../../assets/img/kauban_app_assets/header/kauban_app_logo.png')}
        />
      </LinearGradient>
    </View>
  );
};

export default KaubanHeader;

const styles = StyleSheet.create({
  headerContainer: {
    borderWidth: 2,
    borderColor: '#16163F',
    width: wp('95%'),
    height: Platform.OS === 'ios' ? 55 : 90,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconStyles: { flex: 1, left: '40%' },
});
