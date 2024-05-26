import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoogleIcon from '../assets/icons/googleIcon.svg';
import { COLORS } from '../constants/colors.constant';

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <View style={styles.buttonContent}>
        <GoogleIcon width={15} height={15} />
        <Text style={styles.googleText}>Continue with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: COLORS.TEXTLINK,
    borderRadius: 5,
    marginTop: 20,
    width: '85%',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  googleText: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 10,
  },
});
