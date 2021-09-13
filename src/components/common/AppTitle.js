import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Colors, Spacing, FontSize} from '../../config/Configure';

const AppTitle = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.textcommon, style]} {...otherProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  textcommon: {
    fontSize: FontSize.xl,
    color: Colors.primary,
    alignSelf: 'flex-start',
    paddingVertical: wp(2),
    paddingLeft: wp(5),
    // fontFamily: 'helvetica-neue-medium',
    fontFamily: 'helvetica-neue-bold',
  },
});

export default AppTitle;
