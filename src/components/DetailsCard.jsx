import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors.constant';
import Location from '../assets/icons/locationGreen.svg';
import {useNavigation} from '@react-navigation/native';

const DetailsCard = ({data}) => {
  const navigation = useNavigation();

  // Safeguard against null or undefined data
  const imageUrl = data?.images?.[0]?.url
    ? data.images[0].url
    : 'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg';

  const name = data?.name || 'No name available';
  const city = data?.addresses?.[0]?.city || 'Unknown location';
  const description = data?.description || 'No description available';

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('detailsScreen', {data, dataType: 'parks'})
      }>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <View style={styles.locationContainer}>
          <Location width={15} height={15} />
          <Text style={styles.locationText}>{city}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
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
    color: COLORS.TEXTSECONDARY,
  },
});
