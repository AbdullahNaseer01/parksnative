// import React from 'react';
// import { StyleSheet, TextInput, View, Text} from 'react-native';

// const CustomTextInput = ({
//   label,
//   value,
//   onChangeText,
//   placeholder = '',
//   keyboardType = 'default',
//   secureTextEntry = false,
//   style = {},
//   inputStyle = {},
// }) => {
//   return (
//     <View style={[styles.container, style]}>
//       {label ? <Text style={styles.label}>{label}</Text> : null}
//       <TextInput
//         style={[styles.input, inputStyle]}
//         value={value}
//         onChangeText={onChangeText}
//         placeholder={placeholder}
//         keyboardType={keyboardType}
//         secureTextEntry={secureTextEntry}
//         placeholderTextColor="#888"
//       />
//     </View>
//   );
// };



// export default CustomTextInput;

// const styles = StyleSheet.create({
//   container: {
//     margin: 10,
//   },
//   label: {
//     marginBottom: 5,
//     fontSize: 16,
//     color: '#333',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     color: '#333',
//     backgroundColor: '#fff',
//   },
// });


import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../constants/colors.constant';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  keyboardType = 'default',
  secureTextEntry = false,
  style = {},
  inputStyle = {},
}) => {
  return (
    <View style={[styles.container, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
      />
    </View>
  );
};

CustomTextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#333',
    backgroundColor: '#fff',
  },
});
