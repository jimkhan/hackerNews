import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as CustomeHeader from '../customeHeader/CustomeHead';
import TabRoot from '../tabnavigator/TabRoot';
import ViewInWeb from '../../screens/ViewInWeb';
import {Colors} from '../../config/Configure';

const Stack = createNativeStackNavigator();

const StackRoot = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary},
        headerTitle: props => <CustomeHeader.MainLogo {...props} />,
      }}>
      <Stack.Screen name={'Home'} component={TabRoot} />
      <Stack.Screen
        name={'ViewInWeb'}
        component={ViewInWeb}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoot;
