import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import SearchIcon from '../../assets/icons/search.svg';
import FilterIcon from '../../assets/icons/filter.svg';
import CustomFilterModal from '../../components/FilterModal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [filters, setFilters] = useState({
    articles: false,
    lessonPlans: false,
    thingsToDo: false,
    campGround: false,
    events: false,
    parks: false,
  });
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = () => {
    Alert.alert(
      'Search Filters',
      `Query: ${query}\nState: ${selectedState}\nFilters: ${JSON.stringify(
        filters,
      )}`,
    );
  };

  const toggleFilter = filter => {
    setFilters({...filters, [filter]: !filters[filter]});
  };

  const handleApplyFilters = () => {
    setModalVisible(false);
    handleSearch();
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
      <CustomFilterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filters={filters}
        toggleFilter={toggleFilter}
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
