import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/dist/Ionicons';
import EntIcon from 'react-native-vector-icons/dist/Entypo';
import {Colors} from '../../config/Configure';
import TopNews from '../../screens/TopNews';
import NewNews from '../../screens/NewNews';
import BestNews from '../../screens/BestNews';
import JobNews from '../../screens/JobNews';
import {RFValue} from 'react-native-responsive-fontsize';

const TabRoot = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShon: true,
      }}
      initialRouteName="Home"
      activeColor={Colors.red}
      inactiveColor={Colors.lightGray}
      barStyle={{backgroundColor: Colors.white}}>
      <Tab.Screen
        name="TopNews"
        component={TopNews}
        options={{
          tabBarLabel: 'Top',
          tabBarIcon: ({color}) => (
            <Icon name="globe" color={color} size={RFValue(24)} />
          ),
        }}
      />
      <Tab.Screen
        name="NewNews"
        component={NewNews}
        options={{
          tabBarLabel: 'New',
          tabBarIcon: ({color}) => (
            <EntIcon name={'new'} color={color} size={RFValue(24)} />
          ),
        }}
      />
      <Tab.Screen
        name="BestNews"
        component={BestNews}
        options={{
          tabBarLabel: 'Best',
          tabBarIcon: ({color}) => (
            <Icon name="md-ribbon-sharp" color={color} size={RFValue(24)} />
          ),
        }}
      />
      <Tab.Screen
        name="JobNews"
        component={JobNews}
        options={{
          tabBarLabel: 'Job',
          tabBarIcon: ({color}) => (
            <Icon name="ios-briefcase" color={color} size={RFValue(24)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoot;
