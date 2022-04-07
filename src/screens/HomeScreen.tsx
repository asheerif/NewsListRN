import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {AxiosClient} from '../services/AxiosClient';
import routes from '../navigation/routes';
import NewsResponse from '../services/ApiModels/NewsResponse';
import Article from '../services/ApiModels/Article';
import {getUIdByDynamicLink} from '../utilites/HelperDeepLink';
import NewsDetailsScreen from './NewsDetailsScreen';

const HomeScreen = props => {
  const [dataApi, setData] = useState<NewsResponse>();

  const getData = async () => {
    let results = await AxiosClient<NewsResponse>();
    setData(results);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    invokeDeepLink();
  }, []);
  async function invokeDeepLink() {
    const id = await getUIdByDynamicLink();
    if (id) props.navigation.navigate(routes.NewsDetails, {id: id});
  }
  const Item = ({data}: {data: Article}) => (
    <View style={styles.item}>
      <Image style={styles.logo} source={{uri: data.urlToImage}} />
      <Text
        onPress={() => {
          props.navigation.navigate(routes.NewsDetails, {response: data});
        }}
        style={styles.title}>
        {data.title}
      </Text>
    </View>
  );
  const renderItem = ({item}: {item: Article}) => <Item data={item} />;

  return (
    <SafeAreaView style={styles.newsContainer}>
      <FlatList
        data={dataApi?.articles}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
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
  title: {
    fontSize: 16,
    marginTop: 20,
    color: '#000000',
  },
  logo: {
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});
export default HomeScreen;
