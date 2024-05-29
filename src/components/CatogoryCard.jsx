import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/colors.constant';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Icon name="location-on" size={15} color={COLORS.TEXTLINK} />
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
