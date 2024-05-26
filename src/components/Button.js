// import React from 'react';
// import {TouchableOpacity, Text} from 'react-native';
// import {StyleSheet} from 'react-native';
// import { COLORS } from '../constants/colors.constant';
// // import {colors} from '../utils/styles';
// // import { Colors } from 'react-native/Libraries/NewAppScreen';

// const Button = ({text, onPress}) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.button}>
//       <Text style={styles.buttonText}>{text}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: COLORS.PRIMARY,
//     padding: 15,
//     borderRadius: 5,
//     width: '85%',
//     paddingHorizontal: 10,
//     alignSelf: 'center',
//     // margin: 'auto',
//     marginTop:15
//   },
//   buttonText: {
//     color: COLORS.WHITE,
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Button;


import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors.constant';

const Button = ({ text, onPress, loading }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} disabled={loading}>
      <Text style={styles.buttonText}>{loading ? 'Logging In...' : text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    padding: 15,
    borderRadius: 5,
    width: '85%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
