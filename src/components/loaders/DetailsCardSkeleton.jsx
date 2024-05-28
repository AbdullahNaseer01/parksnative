import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {COLORS} from '../../constants/colors.constant';

const DetailsCardSkeleton = () => {
  const animValue = new Animated.Value(0);

  const sequence = Animated.sequence([
    Animated.timing(animValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(animValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
  ]);

  // Start animation loop
  Animated.loop(sequence).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.skeletonCard,
          {
            opacity: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.skeletonCard,
          {
            opacity: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.skeletonCard,
          {
            opacity: animValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          },
        ]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  skeletonCard: {
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    elevation: 2,
    padding: 10,
    marginVertical: 8,
    width: '100%',
    height: 80,
  },
});

export default DetailsCardSkeleton;
