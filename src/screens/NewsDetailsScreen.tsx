import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const NewsDetailsScreen = props => {
  return (
    <ScrollView>
      <View style={styles.item}>
        <Image
          style={styles.logo}
          source={{uri: props.route.params.response.urlToImage}}
        />
        <Text style={styles.header}>Title</Text>
        <Text style={styles.title}>{props.route.params.response.title}</Text>
        <Text style={styles.header}>Description</Text>
        <Text style={styles.title}>
          {props.route.params.response.description}
        </Text>
        <Text style={styles.header}>Published At </Text>
        <Text style={styles.title}>
          {props.route.params.response.publishedAt}
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderRadius: 6,
  },
  newsContainer: {
    padding: 10,
    borderRadius: 6,
  },
  item: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 18,
    marginTop: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#000000',
  },
  logo: {
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
export default NewsDetailsScreen;
