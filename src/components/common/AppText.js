import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Colors, Spacing, FontSize} from '../../config/Configure';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.textcommon, style]} {...otherProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  textcommon: {
    fontSize: FontSize.es,
    color: Colors.darkGray,
    // fontFamily: 'helvetica-neue-medium',
    fontFamily: 'helvetica-neue-medium',
  },
});

export default AppText;
