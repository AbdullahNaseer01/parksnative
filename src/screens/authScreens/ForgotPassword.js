import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/styles';
import NavigationArrow from '../../components/NavigationArrow';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {privateStyle} from '../../components/styles';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const ForgotScreen = () => {
  const navigation = useNavigation();
const [email, setEmail] = useState('');
  const forgotPassword = async () => {
    try {
      if (!email) {
        // Alert.alert('Please enter your email address');

        return;
      }
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password reset email sent!');
      // navigation.goBack();
    } catch (error) {
      let errorMessage =
        'An error occurred while sending the password reset email. Please try again.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'That email address is not registered!';
      }
      Alert.alert(errorMessage);
      console.error(error);
      Alert.alert(error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <NavigationArrow
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />

      <>
        <Image
          style={styles.Image}
          source={require('../../assets/images/forgot.jpg')}
        />
        <View style={styles.formContainer}>
          <View>
            <Text style={privateStyle.heading}>Forgot Password ?</Text>
            <Text
              style={{
                marginBottom: 18,
                paddingHorizontal: 16,
                marginTop: 5,
              }}>
              Don't worry ! it happens , please enter email address linked to
              your account.
            </Text>
            <View>
            <CustomTextInput label="Email" value={email} onChangeText={setEmail} />
            </View>
          </View>
        </View>
        <Button
          text="Send Code "
          // onPress={() => {
          //   navigation.navigate('Otp');
          // }}
          onPress={forgotPassword}
        />
      </>
    </ScrollView>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  Image: {
    width: 300,
    height: 300,
    borderRadius: 100,
    marginTop: 50,
    padding: 20,
    alignSelf: 'center',
  },
  formContainer: {
    paddingHorizontal: 15,
    width: '100%',
    marginTop: 20,
  },
  formData: {
    display: 'flex',
    justifyContent: 'center',

    width: '100%',
  },
  input: {
    marginHorizontal: 15,
    // height: 40,
    // paddingHorizontal: 55,
    backgroundColor: 'whitesmoke',
    borderRadius: 100,
    padding: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#24306e',
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    margin: 15,
    marginTop: 20,
    // height: 40,
    borderRadius: 100,
  },
});
