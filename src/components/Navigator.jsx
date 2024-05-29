import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../constants/colors.constant';
import Arrow from '../assets/icons/rightArrow.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Navigator = ({name = 'name', screen = 'search'}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(screen);
        }}
        style={styles.linkContainer}>
        <Text style={styles.linkText}>View all</Text>
        <Icon name="arrow-right" size={15} color={COLORS.TEXTLINK} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    // backgroundColor: 'red',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXTPRIMARY,
    // backgroundColor:"red"
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.TEXTLINK,
    marginRight: 4,
  },
});
