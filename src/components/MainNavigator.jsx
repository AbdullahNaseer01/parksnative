import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import LeftArrow from '../assets/icons/leftArrow.svg';
import Heart from '../assets/icons/heart.svg';
import FilledHeart from '../assets/icons/heartIcon'; // Import filled heart icon
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromWishlist} from '../store/slices/authSlice';

const MainNavigator = ({data, dataType}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const isItemInWishlist = user?.wishlist?.some(item => item?.data?.id === data.id);
  const handleWishlistPress = () => {
    if (isItemInWishlist) {
      dispatch(removeFromWishlist(data.id));
    } else {
      dispatch(addToWishlist({data, dataType: dataType}));
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.button}>
        <LeftArrow width={18} height={18} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWishlistPress} style={styles.button}>
        {isItemInWishlist ? (
          <FilledHeart width={18} height={18} /> // Show filled heart if item is in wishlist
        ) : (
          <Heart width={18} height={18} /> // Show unfilled heart if item is not in wishlist
        )}
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
  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
  },
});
