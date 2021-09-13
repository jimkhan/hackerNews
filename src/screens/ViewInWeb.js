import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';

const ViewInWeb = ({route}) => {
  const url = route.params;
  return (
    <View style={styles.container}>
      <WebView source={{uri: url.url}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ViewInWeb;
