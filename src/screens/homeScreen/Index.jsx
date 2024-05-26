import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import CategoryList from '../../components/catogoryList';
import MainCardList from '../../components/MainCardList';
import DetailsCardList from '../../components/DetailsCardList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Navigator name={'States'} />
      <CategoryList />
      <MainCardList />
      <Navigator name={'Popular Destinations'} />
      <DetailsCardList />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
