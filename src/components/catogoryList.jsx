import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CategoryCard from '../components/CatogoryCard';
import {states} from '../assets/icons/states/states';

const CategoryList = ({selectedState, setSelectedState}) => {
  const onSelect = (stateCode) => {
    setSelectedState(stateCode);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {states?.map((state, index) => (
          <CategoryCard
            key={index}
            stateName={state.name}
            Flag={state.flag}
            code={state.code}
            onSelect={onSelect}
            selectedState={selectedState}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
});
