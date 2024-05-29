import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View, Animated} from 'react-native';
import MainCard from './MainCard';
import {useSelector} from 'react-redux';
import {COLORS} from '../constants/colors.constant';
import SkeletonLoading from './loaders/mainCardSkeleton';
import {useNavigation} from '@react-navigation/native';

// SkeletonLoading.js

// MainCardList.js
const MainCardList = ({selectedState}) => {
  const navigation = useNavigation();
  const parks = useSelector(state => state?.parks?.data?.data?.data || []);
  const loading = useSelector(state => state?.parks?.loading);

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {parks?.map((park, index) => (
            <MainCard
              key={index}
              name={park?.name}
              location={park?.addresses[0]?.city}
              imageURL={park?.images[0]?.url}
              data={park}
              handlePress={() =>
                navigation.navigate('detailsScreen', {
                  data: park,
                  dataType: 'parks',
                })
              }
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default MainCardList;
