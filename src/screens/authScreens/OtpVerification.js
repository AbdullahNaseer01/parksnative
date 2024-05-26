import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/styles';
import NavigationArrow from '../../components/NavigationArrow';
import {privateStyle} from '../../components/styles';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      <NavigationArrow
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
      <View style={styles.container}>
        <Image
          style={styles.Image}
          source={require('../../assets/images/otp.jpg')}
        />
        <View style={styles.formContainer}>
          <View style={styles.formData}>
            <Text style={privateStyle.heading}>OTP Verification</Text>
            <Text style={{marginBottom: 8, paddingHorizontal: 12}}>
              Please enter the OTP sent to your registered email address.
            </Text>
            <CustomTextInput label="Enter Code " />
          </View>
        </View>
        <Button text="Verify" />
        <View>
          <Text style={styles.register}>
            Don't recieve the code ?
            <Text style={styles.registerText}> Resend </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  // },

  Image: {
    width: 300,
    height: 300,
    borderRadius: 100,
    marginTop: 20,
    padding: 20,
    alignSelf: 'center',
  },
  formContainer: {
    flex: 1,
    //  justifyContent:'center',
    // padding: 20,
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
    marginTop: 20,
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
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#24306e',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#24306e',

    marginBottom: 5,
  },

  forgot: {
    alignSelf: 'flex-end',
    margin: 12,
    color: 'blue',
  },

  register: {
    textAlign: 'center',
    marginTop: 30,
  },
  registerText: {
    color: colors.common,
    marginHorizontal: 5,
  },
});
