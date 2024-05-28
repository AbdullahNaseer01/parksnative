import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, View, Animated} from 'react-native'; // Import Animated from react-native
import {COLORS} from '../../constants/colors.constant';

const SkeletonLoading = () => {
  const animValue1 = useRef(new Animated.Value(0)).current; // Use useRef from react to create animated values
  const animValue2 = useRef(new Animated.Value(0)).current;
  const animValue3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const sequence1 = Animated.sequence([
      Animated.timing(animValue1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animValue1, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);
    const sequence2 = Animated.sequence([
      Animated.timing(animValue2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: 250,
      }),
      Animated.timing(animValue2, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);
    const sequence3 = Animated.sequence([
      Animated.timing(animValue3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: 500,
      }),
      Animated.timing(animValue3, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    Animated.loop(sequence1).start();
    Animated.loop(sequence2).start();
    Animated.loop(sequence3).start();
  }, [animValue1, animValue2, animValue3]);

  return (
    <View style={styles.skeletonContainer}>
      <Animated.View
        style={[
          styles.skeletonCard,
          {
            opacity: animValue1.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.skeletonCard,
          {
            opacity: animValue2.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.skeletonCard,
          {
            opacity: animValue3.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skeletonCard: {
    width: 222,
    height: 143,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginHorizontal: 8,
    elevation: 2,
  },
});

export default SkeletonLoading;
