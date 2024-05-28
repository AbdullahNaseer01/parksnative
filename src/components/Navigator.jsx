import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../constants/colors.constant';
import Arrow from '../assets/icons/rightArrow.svg';

const Navigator = ({name = 'name'}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>View all</Text>
        <Arrow width={12} height={12} />
      </View>
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
