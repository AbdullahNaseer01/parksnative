import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants/colors.constant';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainCard = ({name, location, imageURL, styleProp, handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={StyleSheet.flatten([styles.container, styleProp])}>
      {imageURL ? (
        <ImageBackground
          source={{uri: imageURL}}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}>
          <View style={styles.textContainer}>
            <Text style={styles.locationTitle}>{name}</Text>
            <View style={styles.locationContainer}>
              <Icon name="location-on" size={15} color={COLORS.WHITE} />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>No Image Available</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  container: {
    width: 222,
    height: 143,
    borderRadius: 13,
    overflow: 'hidden',
    marginRight: 12,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 13,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.WHITE,
    marginLeft: 8,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 13,
  },
  placeholderText: {
    fontSize: 16,
    color: 'gray',
  },
});
