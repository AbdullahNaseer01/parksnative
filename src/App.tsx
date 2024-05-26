import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Navigator from './components/Navigator';
import CategoryCard from './components/CatogoryCard';
import CategoryList from './components/catogoryList';
import MainCard from './components/MainCard';
import MainCardList from './components/MainCardList';
import DetailsCard from './components/DetailsCard';
import DetailsCardList from './components/DetailsCardList';
import Header from './components/Header';
import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailsScreen/Index';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen/>
      {/* <DetailsScreen /> */}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // flex: 1,
  },
});
