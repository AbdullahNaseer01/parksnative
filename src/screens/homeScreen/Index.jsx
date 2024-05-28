import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import CategoryList from '../../components/catogoryList';
import MainCardList from '../../components/MainCardList';
import DetailsCardList from '../../components/DetailsCardList';

const HomeScreen = () => {
  const [selectedState, setSelectedState] = useState('AK');

  return (
    <View style={styles.container}>
      <Header />
      <Navigator name={'States'} />
      <CategoryList
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <MainCardList selectedState={selectedState} />
      <Navigator name={'Popular Destinations'} />
      <DetailsCardList selectedState={selectedState} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
