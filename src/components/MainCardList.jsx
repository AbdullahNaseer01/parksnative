// MainCardList.js
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import MainCard from './MainCard';

// data.js
const locations = [
  {
    name: 'Rinjani Mountain',
    location: 'Indonesia',
    image:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    name: 'Mount Fuji',
    location: 'Japan',
    image:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    name: 'Grand Canyon',
    location: 'USA',
    image:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  // Add more locations as needed
];

const MainCardList = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {locations.map((location, index) => (
          <MainCard
            key={index}
            name={location?.name}
            location={location?.location}
            imageURL={location?.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainCardList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});
