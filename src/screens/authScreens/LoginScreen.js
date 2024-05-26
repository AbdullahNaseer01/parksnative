import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';
import CustomTextInput from '../../components/TextInput';
import { COLORS } from '../../constants/colors.constant';
import GoogleButton from '../../components/GoogleButton';

const Login = ({ imageUrl }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Email and password are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log('Email:', email);
      console.log('Password:', password);
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.para}>Please login to continue</Text>

      <View style={styles.inputContainer}>
        <CustomTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
        <CustomTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Text
          onPress={() => Alert.alert('Forgot Password', 'Navigate to forgot password screen')}
          style={styles.forgot}
        >
          Forgot Password?
        </Text>
      </View>

      <Button text="Login" onPress={handleSubmit} loading={loading} />

      <View style={styles.registerTextContainer}>
        <Text style={styles.buttonText}>Don't have an account?</Text>
        <Text
          onPress={() => Alert.alert('Register', 'Navigate to register screen')}
          style={styles.loginText}
        >
          Register here
        </Text>
      </View>
      <GoogleButton/>
    </ScrollView>
  );
};

export default Login;

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
  para: {
    color: COLORS.TEXTLINK,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  forgot: {
    fontSize: 14,
    color: COLORS.TEXTLINK,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 20,
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
