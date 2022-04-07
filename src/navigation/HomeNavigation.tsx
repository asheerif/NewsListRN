import React, {FC} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import routes from './routes';
const StackNavigator = createNativeStackNavigator();

const HomeNavigation: FC = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={routes.NewsList}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNavigator.Screen
        name={routes.NewsDetails}
        component={NewsDetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default HomeNavigation;
