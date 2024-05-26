// import React, {useState} from 'react';
// import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import Button from '../../components/Button';
// import CustomTextInput from '../../components/TextInput';
// import {useDispatch} from 'react-redux';
// import {COLORS} from '../../constants/colors.constant';

// const Register = ({imageUrl}) => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = () => {
//     const trimmedEmail = email.trim();
//     const trimmedPassword = password.trim();
//     const trimmedName = name.trim();
//     const trimmedPhoneNumber = phoneNumber.trim();
//     const trimmedConfirmPassword = confirmPassword.trim();

//     if (
//       !trimmedEmail ||
//       !trimmedPassword ||
//       !trimmedName ||
//       !trimmedPhoneNumber ||
//       !trimmedConfirmPassword
//     ) {
//       Alert.alert('Error', 'All fields are required');
//       return;
//     }

//     if (trimmedPassword !== trimmedConfirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
//       Alert.alert('Error', 'Please enter a valid email address');
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       console.log('Name:', trimmedName);
//       console.log('Email:', trimmedEmail);
//       console.log('Phone Number:', trimmedPhoneNumber);
//       console.log('Password:', trimmedPassword);
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{uri: imageUrl}} style={styles.image} />
//       <Text style={styles.heading}>Create an Account</Text>

//       <View style={styles.inputContainer}>
//         <CustomTextInput label="Name" value={name} onChangeText={setName} />
//         <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
//         <CustomTextInput
//           label="Phone Number"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//         />
//         <CustomTextInput
//           label="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={true}
//         />
//         <CustomTextInput
//           label="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           secureTextEntry={true}
//         />
//       </View>

//       <Button
//         text={loading ? 'Registering...' : 'Register Account'}
//         onPress={handleSubmit}
//         loading={loading}
//       />

//       <View style={styles.registerTextContainer}>
//         <Text style={styles.buttonText}>Already Have an Account?</Text>
//         <Text
//           onPress={() => Alert.alert('Login', 'Navigate to login screen')}
//           style={styles.loginText}>
//           Login Account
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default Register;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: COLORS.WHITE,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//     borderRadius: 50,
//     backgroundColor: COLORS.WHITE,
//   },
//   heading: {
//     color: COLORS.PRIMARY,
//     fontSize: 22,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: 5,
//     marginBottom: 10,
//   },
//   inputContainer: {
//     width: '100%',
//   },
//   registerTextContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   buttonText: {
//     fontSize: 14,
//     textAlign: 'center',
//     paddingHorizontal: 10,
//   },
//   loginText: {
//     fontSize: 14,
//     color: COLORS.PRIMARY,
//     textAlign: 'center',
//   },
// });



import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import CustomTextInput from '../../components/TextInput';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../constants/colors.constant';
import GoogleButton from '../../components/GoogleButton';

const Register = ({ imageUrl }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedName = name.trim();
    const trimmedPhoneNumber = phoneNumber.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (
      !trimmedEmail ||
      !trimmedPassword ||
      !trimmedName ||
      !trimmedPhoneNumber ||
      !trimmedConfirmPassword
    ) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log('Name:', trimmedName);
      console.log('Email:', trimmedEmail);
      console.log('Phone Number:', trimmedPhoneNumber);
      console.log('Password:', trimmedPassword);
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.heading}>Create an Account</Text>

      <View style={styles.inputContainer}>
        <CustomTextInput label="Name" value={name} onChangeText={setName} />
        <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
        <CustomTextInput
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomTextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>

      <Button
        text={loading ? 'Registering...' : 'Register Account'}
        onPress={handleSubmit}
        loading={loading}
      />

      <View style={styles.registerTextContainer}>
        <Text style={styles.buttonText}>Already Have an Account?</Text>
        <Text
          onPress={() => Alert.alert('Login', 'Navigate to login screen')}
          style={styles.loginText}
        >
          Login Account
        </Text>
      </View>
      <GoogleButton/>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    marginBottom: 20,
  },
  heading: {
    color: COLORS.PRIMARY,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  loginText: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    textAlign: 'center',
  },
});
