import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors.constant';

const CategoryCard = ({stateName, Flag, code, onSelect, selectedState}) => {
  const isSelected = selectedState === code;

  const handlePress = () => {
    if (!isSelected) {
      onSelect(code);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {backgroundColor: isSelected ? COLORS.PRIMARY : '#F6F8FA'},
      ]}
      onPress={handlePress}>
      {/* {<Flag width={15} height={15} />} */}
      <Text
        style={[
          styles.text,
          {color: isSelected ? COLORS.WHITE : COLORS.TEXTSECONDARY},
        ]}>
        {stateName}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    width: 'auto',
    marginRight: 10,
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: '500',
  },
});
