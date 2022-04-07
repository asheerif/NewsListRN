import React from 'react';
import {View, Text} from 'react-native';
import routes from '../navigation/routes';

interface SettingsScreenProps {
  navigation: any;
}
const SettingsScreen = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => props.navigation.navigate(routes.Home)}>
        Setting screen
      </Text>
    </View>
  );
};

export default SettingsScreen;
