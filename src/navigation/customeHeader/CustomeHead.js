import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ImageSize = 7;

// * main logo

export const MainLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../img/logo1.png')} style={styles.logo} />
    </View>
  );
};

// * style section

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: hp(ImageSize),
    width: hp(ImageSize),
    left: -wp(3),
  },
});
