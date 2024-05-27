import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LeftfArrow from '../assets/icons/leftArrow.svg';
import Heart from '../assets/icons/heart.svg';
import {useNavigation} from '@react-navigation/native';

const MainNavigator = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.button}>
        <LeftfArrow width={18} hight={18} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Heart width={18} hight={18} />
      </TouchableOpacity>
    </View>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 16,
  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
  },
});
