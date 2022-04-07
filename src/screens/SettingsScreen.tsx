import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {setLanguage} from '../utilites/Locale/localHelper';
import RNRestart from 'react-native-restart';
interface SettingsScreenProps {
  navigation: any;
}
const SettingsScreen: FC<SettingsScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Select langauge'} </Text>
      <Button
        color="green"
        onPress={() => {
          setLanguage('en');
          RNRestart.Restart();
        }}
        title={'English'}
      />
      <Button
        color="red"
        onPress={() => {
          setLanguage('de');
          RNRestart.Restart();
        }}
        title={'German'}
      />
      <Text style={styles.title}>{'Change Theme'} </Text>
      <Button color="black" onPress={() => {}} title={'Dark'} />
      <Button color="blue" onPress={() => {}} title={'Light'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 16,
    alignSelf: 'center',
  },
});
export default SettingsScreen;
