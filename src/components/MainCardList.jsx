import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View, Animated} from 'react-native';
import MainCard from './MainCard';
import {useSelector} from 'react-redux';
import {COLORS} from '../constants/colors.constant';
import SkeletonLoading from './loaders/mainCardSkeleton';

// SkeletonLoading.js

// MainCardList.js
const MainCardList = ({selectedState}) => {
  const parks = useSelector(state => state?.parks?.data?.data?.data || []);
  const loading = useSelector(state => state?.parks?.loading);

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonLoading /> // Render skeleton loading when loading is true
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {parks?.map((park, index) => (
            <MainCard
              key={index}
              name={park?.name}
              location={park?.addresses[0]?.city}
              imageURL={park?.images[0]?.url}
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
