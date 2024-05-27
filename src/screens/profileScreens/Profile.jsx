import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
  };
  return (
    <View>
      <Text>profile</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
