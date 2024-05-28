import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import DetailsCard from './DetailsCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParks, clearParksData } from '../store/slices/parksSlice';
import { COLORS } from '../constants/colors.constant';

const DetailsCardList = ({ selectedState }) => {
  const dispatch = useDispatch();
  const parks = useSelector(state => state?.parks?.data?.data?.data || []);
  const totalPages = useSelector(state => state?.parks?.data?.data?.total || 0);

  const [activity, setActivity] = useState('');
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);

  const previousStateRef = useRef();
  useEffect(() => {
    previousStateRef.current = selectedState;
  });
  const previousState = previousStateRef.current;

  const params = {
    limit: '10',
    start: start.toString(),
    stateCode: selectedState,
  };
  if (activity) {
    params.q = activity;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (selectedState !== previousState) {
          dispatch(clearParksData());  // Clear the parks data only when selectedState changes
          setStart(0);  // Reset start to 0 when state changes
        }
        await dispatch(fetchParks(params));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching parks', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, start, selectedState, activity, previousState]);

  const handleLoadMore = () => {
    if (start + 10 < totalPages) {
      setStart(prevStart => prevStart + 10);
    }
  };

  return loading ? (
    <Text>Loading</Text>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        {parks?.map(item => (
          <DetailsCard key={item.id} park={item} />
        ))}
        {start + 10 < totalPages && (
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
  },
  loadMoreContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loadMore: {
    textAlign: 'center',
    color: COLORS.TEXTLINK,
  },
});
