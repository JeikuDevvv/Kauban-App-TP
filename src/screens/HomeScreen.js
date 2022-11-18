/**
 * Copyright (c) 2022 TechnoPerfomance / Jeiku Dev
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import { styles } from './styles';
import { useAuth } from '../contexts/Auth';
import { PrimaryButton } from '../components/PrimaryButton';

export const HomeScreen = () => {
  const auth = useAuth();
  const signOut = () => {
    auth.signOut();
  };

  const image = {
    uri: 'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/266325212_3059911670935724_2997856853831326546_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE9uAyJiz2aBiMZuaBH3tixUxx6RazvlMVTHHpFrO-UxbRMID5YRSDSrfLLJ89gLmIAlRVdVaIv34t_VRCKmEZJ&_nc_ohc=tW_RYUJGyTkAX-dib8G&tn=wypYIOxJxVxjt4Uk&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfBu3zdgGB1qn4vvO7U3tEzaUzYcL_O1kJWBy4IV2MGsJw&oe=63776719',
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            height: 250,
            width: 250,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10%',
          }}
        >
          <Text>Nani</Text>
        </View>
      </ImageBackground>
      <PrimaryButton
        customOnPress={signOut}
        customIconName={'car'}
        customTextHolder={'BERNARD OUT'}
      />
    </View>
  );
};
