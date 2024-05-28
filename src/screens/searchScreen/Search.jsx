import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';
import FilterIcon from '../../assets/icons/filter.svg';
import CustomFilterModal from '../../components/FilterModal';
import DetailsCardList from '../../components/DetailsCardList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchParks} from '../../store/slices/parksSlice';
import {fetchArticles} from '../../store/slices/articalsSlice';
import {fetchCampgrounds} from '../../store/slices/campgroundSlice';
import {fetchEvents} from '../../store/slices/eventsSlice';
import {fetchLessonPlans} from '../../store/slices/lessonPlansSlice';
import {clearParksData} from '../../store/slices/parksSlice';
import {fetchSearchParks} from '../../store/slices/searchParksSlice';
import DetailsList from '../../components/DetailsList';

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);

  const parks = useSelector(
    state => state?.searchParks?.data?.data?.data || [],
  );
  const articles = useSelector(
    state => state?.articles?.data?.data?.data || [],
  );
  const campgrounds = useSelector(
    state => state?.campground?.campgrounds?.data || [],
  );
  const events = useSelector(state => state?.events?.events?.data || []);
  const lessonPlans = useSelector(
    state => state?.lessonPlans?.lessonPlans?.data || [],
  );

  const articlesTotal = useSelector(
    state => state?.articles?.data?.data?.total || 0,
  );
  const parksTotal = useSelector(
    state => state?.searchParks?.data?.data?.total || 0,
  );
  const lessonPlansTotal = useSelector(
    state => state?.lessonPlans?.lessonPlans?.total || 0,
  );
  const campgroundsTotal = useSelector(
    state => state?.campground?.campgrounds?.total || 0,
  );
  const eventsTotal = useSelector(state => state?.events?.events?.total || 0);

  const getTotalPages = () => {
    switch (selectedFilter) {
      case 'articles':
        return articlesTotal;
      case 'parks':
        return parksTotal;
      case 'lessonPlans':
        return lessonPlansTotal;
      case 'campGround':
        return campgroundsTotal;
      case 'events':
        return eventsTotal;
      default:
        return 0;
    }
  };

  const totalPages = getTotalPages();

  const params = {
    stateCode: selectedState,
    limit: '10',
    start: start.toString(),
  };
  if (query) {
    params.q = query;
  }

  useEffect(() => {
    console.log('selectedFilter', selectedFilter);
  }, [selectedFilter]);

  const fetchSelectedData = async () => {
    setLoading(true);
    try {
      switch (selectedFilter) {
        case 'articles':
          await dispatch(fetchArticles(params));
          break;
        case 'lessonPlans':
          await dispatch(fetchLessonPlans(params));
          break;
        case 'campGround':
          await dispatch(fetchCampgrounds(params));
          break;
        case 'events':
          await dispatch(fetchEvents(params));
          break;
        case 'parks':
          await dispatch(fetchSearchParks(params));
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    Alert.alert(
      'Search Filters',
      `Query: ${query}\nState: ${selectedState}\nFilter: ${selectedFilter}`,
    );
    setStart(0);
    fetchSelectedData();
  };

  const handleApplyFilters = () => {
    setModalVisible(false);
    handleSearch();
  };

  const handleLoadMore = () => {
    if (start + 10 < totalPages) {
      setStart(prevStart => prevStart + 10);
      fetchSelectedData();
    }
  };

  const getDataForSelectedFilter = () => {
    switch (selectedFilter) {
      case 'articles':
        return articles;
      case 'lessonPlans':
        return lessonPlans;
      case 'campGround':
        return campgrounds;
      case 'events':
        return events;
      case 'parks':
        return parks;
      default:
        return [];
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon width={20} height={20} />
        <TextInput
          style={styles.input}
          placeholder="Enter your query"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={() => setModalVisible(true)}>
          <FilterIcon width={20} height={20} color="gray" />
        </TouchableOpacity>
      </View>
      <DetailsList
        data={getDataForSelectedFilter()}
        loading={loading}
        handleLoadMore={handleLoadMore}
        hasMore={start + 10 < totalPages}
        dataType={selectedFilter}
      />
      <CustomFilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        handleApplyFilters={handleApplyFilters}
      />
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  filterIconContainer: {
    padding: 5,
  },
});
