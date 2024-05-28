import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import DetailsCard from './DetailsCard';
import {COLORS} from '../constants/colors.constant';
import SkeletonLoadingDetailsCard from './loaders/DetailsCardSkeleton'; // Import the skeleton loading component
import SearchDetailsCard from './searchDetailsCard';

const DetailsCardList = ({
  data,
  loading,
  handleLoadMore,
  hasMore,
  dataType,
}) => {
  useEffect(() => {
    console.log(data, ' data from details card list');
  }, [data]);

  return loading ? (
    <SkeletonLoadingDetailsCard />
  ) : (
    <ScrollView>
      <View style={styles.container}>
        {data?.map((item, index) => (
          <SearchDetailsCard key={index} data={item} dataType={dataType} />
        ))}
        {hasMore && (
          <TouchableOpacity
            style={styles.loadMoreContainer}
            onPress={handleLoadMore}>
            <Text style={styles.loadMore}>Load More</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default DetailsCardList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingBottom: 20,
  },
  loadMoreContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  loadMore: {
    textAlign: 'center',
    color: COLORS.TEXTLINK,
  },
});
