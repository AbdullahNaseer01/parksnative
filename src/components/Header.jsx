import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MenuIcon from '../assets/icons/menuIcon.svg';
import Location from '../assets/icons/locationGreen.svg';
import {COLORS} from '../constants/colors.constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  const profileImageUrl =
    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuContainer}>
        <MenuIcon width={18} height={18} />
      </TouchableOpacity>
      <View>
        <Text style={styles.currentLocationText}>Current Location</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-on" size={15} color={COLORS.TEXTLINK} />
          <Text style={styles.locationText}>location here</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          {profileImageUrl && (
            <Image
              source={{uri: profileImageUrl}}
              style={styles.profileImage}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8FA',
    width: 36,
    height: 36,
    borderRadius: 8,
  },
  currentLocationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.TEXTLINK,
    marginLeft: 8,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImageContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F6F8FA',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the image is rounded
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});
