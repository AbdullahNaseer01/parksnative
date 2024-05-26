import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../constants/colors.constant';
import Location from '../assets/icons/locationGreen.svg';

const DetailsCard = ({name, location, description, imageURL}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: imageURL
              ? imageURL
              : 'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.heading}>{name}</Text>
        <View style={styles.locationContainer}>
          <Location width={15} height={15} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    elevation: 4,
    padding: 10,
    marginVertical: 8,
    minWidth: '100%',
    maxWidth: '100%',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.BLACK,
    marginBottom: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.TEXTLINK,
    marginLeft: 8,
  },
  description: {
    fontSize: 12,
    color: COLORS.TEXTSECONDARY
  },
});
