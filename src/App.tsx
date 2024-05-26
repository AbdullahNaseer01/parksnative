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
import Login from './screens/authScreens/LoginScreen';
import Register from './screens/authScreens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      {/* <Register imageUrl={"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"}/> */}
       {/* <HomeScreen/> */}
      {/* <DetailsScreen /> */}
      {/* <Login imageUrl={"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"}/> */}
      {/* </NavigationContainer> */}
      <Navigation />
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
