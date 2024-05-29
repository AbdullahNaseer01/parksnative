import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleWishlistPress} style={styles.button}>
        <Icon name={isItemInWishlist ? "favorite" : "favorite-border"} size={24} color="#000" />
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
