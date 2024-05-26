// // import {StyleSheet, Text, View} from 'react-native';
// // import React from 'react';
// // import Flag_of_Alabama from '../assets/icons/flags/Flag_of_Alabama.svg';
// // import {COLORS} from '../constants/colors.constant';

// // const CategoryCard = () => {
// //   return (
// //     <View style={styles.card}>
// //       <Flag_of_Alabama width={15} height={15} />
// //       <Text style={styles.text}>state</Text>
// //     </View>
// //   );
// // };

// // export default CategoryCard;

// // const styles = StyleSheet.create({
// //   card: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 12,
// //     paddingVertical: 14,
// //     borderRadius: 10,
// //     width: 'auto',
// //     // backgroundColor: '#F6F8FA',
// //     backgroundColor: "red"
// //   },
// //   text: {
// //     marginLeft: 8,
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: COLORS.TEXTSECONDARY,
// //   },
// // });

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/colors.constant';

const CategoryCard = ({stateName, Flag}) => {
  return (
    <View style={styles.card}>
      {<Flag width={15} height={15} />}
      <Text style={styles.text}>{stateName}</Text>
    </View>
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
    backgroundColor: '#F6F8FA',
    marginRight: 10,
  },
  text: {
    marginLeft: 8,
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.TEXTSECONDARY,
  },
});
