import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors.constant';
import Location from '../assets/icons/locationGreen.svg';
import {useNavigation} from '@react-navigation/native';
import {dataMapping, getDefaultImageUrl} from '../constants/dataMapping';

const getNestedProperty = (obj, path, defaultValue) => {
  return (
    path.split('.').reduce((o, p) => {
      if (o && p.includes('[')) {
        const [key, index] = p.split(/\[|\]/).filter(Boolean);
        return o[key] ? o[key][index] : defaultValue;
      }
      return o ? o[p] : defaultValue;
    }, obj) || defaultValue
  );
};

const SearchDetailsCard = ({data, dataType}) => {
  const navigation = useNavigation();

  const mapping = dataMapping[dataType] || {};
  const imageUrl = getNestedProperty(
    data,
    mapping.imageUrl,
    getDefaultImageUrl(),
  );
  const name = getNestedProperty(data, mapping.name, 'No name available');
  const city = getNestedProperty(data, mapping.city, 'Unknown location');
  const description = getNestedProperty(
    data,
    mapping.description,
    'No description available',
  );

  useEffect(() => {
    console.log(
      dataType,
      '<<<<<<<<<<<<<============== data type from details card',
    );
  }, [data]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('detailsScreen', {data, dataType})}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.heading} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <View style={styles.locationContainer}>
          <Location width={15} height={15} />
          <Text style={styles.locationText} numberOfLines={1}>
            {city}
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchDetailsCard;

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
