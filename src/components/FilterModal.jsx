import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/colors.constant';
import {states} from '../assets/icons/states/states';

const CustomFilterModal = ({
  modalVisible,
  setModalVisible,
  selectedFilter,
  setSelectedFilter,
  selectedState,
  setSelectedState,
  handleApplyFilters,
}) => {
  const filterOptions = [
    {label: 'Articles', value: 'articles', icon: 'article'},
    {label: 'Lesson Plans', value: 'lessonPlans', icon: 'school'},
    {label: 'Camp Ground', value: 'campGround', icon: 'terrain'},
    {label: 'Events', value: 'events', icon: 'event'},
    {label: 'Parks', value: 'parks', icon: 'park'},
  ];

  const toggleStateSelection = (stateCode) => {
    if (selectedState === stateCode) {
      setSelectedState(null);  // Unselect the state if it is already selected
    } else {
      setSelectedState(stateCode);  // Select the new state
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Filter Options</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.filterContainer}>
                <Text style={styles.label}>Select Filter:</Text>
                <View style={styles.filterButtonsContainer}>
                  {filterOptions.map(option => (
                    <TouchableOpacity
                      key={option.value}
                      style={[
                        styles.filterButton,
                        selectedFilter === option.value &&
                          styles.filterButtonSelected,
                      ]}
                      onPress={() => setSelectedFilter(option.value)}>
                      <Icon name={option.icon} size={20} color={selectedFilter === option.value ? 'white' : 'black'} />
                      <Text
                        style={[
                          styles.filterButtonText,
                          selectedFilter === option.value &&
                            styles.filterButtonTextSelected,
                        ]}>
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Text style={styles.label}>Select State:</Text>
                <View style={styles.filterButtonsContainer}>
                  {states.map(state => (
                    <TouchableOpacity
                      key={state.name}
                      style={[
                        styles.filterButton,
                        selectedState === state.code &&
                          styles.filterButtonSelected,
                      ]}
                      onPress={() => toggleStateSelection(state.code)}>
                      <Icon name="location-on" size={20} color={selectedState === state.code ? 'white' : 'black'} />
                      <Text
                        style={[
                          styles.filterButtonText,
                          selectedState === state.code &&
                            styles.filterButtonTextSelected,
                        ]}>
                        {state.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleApplyFilters}>
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomFilterModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    padding: 16,
    backgroundColor: 'whitesmoke',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    maxHeight: '60%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXTPRIMARY,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  filterContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: COLORS.TEXTPRIMARY,
  },
  filterButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonSelected: {
    backgroundColor: COLORS.PRIMARY,
  },
  filterButtonText: {
    color: 'black',
    marginLeft: 8,
  },
  filterButtonTextSelected: {
    color: 'white',
  },
  applyButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
