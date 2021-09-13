import React, {useEffect} from 'react';
import {LogBox, SafeAreaView, StyleSheet} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import Root from './src/navigation/Root';
LogBox.ignoreLogs(['Reanimated 2']);
import {store} from './src/store/GlobalStore';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Root />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
