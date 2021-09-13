import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackRoot from './stackNavigators/StackRoot';

const Root = () => {
  return (
    <NavigationContainer mode="modal">
      <StackRoot />
    </NavigationContainer>
  );
};

export default Root;
