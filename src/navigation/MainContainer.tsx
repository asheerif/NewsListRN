import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
import HomeNavigation from './HomeNavigation';
import routes from './routes';

const Tab = createBottomTabNavigator();

const MainContainer: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={routes.Home}
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#33374b',
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            let rn = route.name;

            if (rn === routes.Home) {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (rn === routes.Settings) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={routes.Home}
          component={HomeNavigation}
        />
        <Tab.Screen name={routes.Settings} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
