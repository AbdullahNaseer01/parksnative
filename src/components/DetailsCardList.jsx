import React from 'react';
import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import DetailsCard from './DetailsCard';

const data = [
  {
    id: 1,
    name: 'The Pink Beach',
    location: 'Location 1',
    description:
      'This exceptional beach gets its striking color from microscopic animals called...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 2,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 3,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },

  {
    id: 4,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 5,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 6,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 7,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 8,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
  {
    id: 9,
    name: 'The Blue Lake',
    location: 'Location 2',
    description: 'The lake derives its blue color from minerals...',
    imageURL:
      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
  },
];

const DetailsCardList = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map(item => (
          <DetailsCard
            key={item.id}
            name={item.name}
            location={item.location}
            description={item.description}
            imageURL={item.imageURL}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default DetailsCardList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
