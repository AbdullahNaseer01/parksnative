import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import { COLORS } from '../constants/colors.constant'; // 
import { states } from '../assets/icons/states/states';

const CustomFilterModal = ({
  modalVisible,
  setModalVisible,
  filters,
  toggleFilter,
  selectedState,
  setSelectedState,
  handleApplyFilters,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Filter Options</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <View style={styles.filterContainer}>
                <Text style={styles.label}>Select Filters:</Text>
                <View style={styles.filterButtonsContainer}>
                  {Object.keys(filters).map((key) => (
                    <TouchableOpacity
                      key={key}
                      style={[
                        styles.filterButton,
                        filters[key] && styles.filterButtonSelected,
                      ]}
                      onPress={() => toggleFilter(key)}
                    >
                      <Text
                        style={[
                          styles.filterButtonText,
                          filters[key] && styles.filterButtonTextSelected,
                        ]}
                      >
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Text style={styles.label}>Select State:</Text>
                <View style={styles.filterButtonsContainer}>
                  {states.map((state) => (
                    <TouchableOpacity
                      key={state.name}
                      style={[
                        styles.filterButton,
                        selectedState === state.name && styles.filterButtonSelected,
                      ]}
                      onPress={() => setSelectedState(state.name)}
                    >
                        {/* {Flag = state?.flag}
                      {<Flag width={15} height={15} />} */}
                      <Text
                        style={[
                          styles.filterButtonText,
                          selectedState === state.name && styles.filterButtonTextSelected,
                        ]}
                      >
                        {state.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={handleApplyFilters}
              >
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
  flagIcon: {
    width: 20,
    height: 20,
  },
  applyButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
