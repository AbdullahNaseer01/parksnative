// import {
//   StyleSheet,
//   Text,
//   ToastAndroid,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import auth from '@react-native-firebase/auth';

// const Profile = () => {
//   handleSignOut = () => {
//     auth()
//       .signOut()
//       .then(() => console.log('User signed out!'));
//     ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
//   };
//   return (
//     <View>
//       <Text>profile</Text>
//       <TouchableOpacity onPress={handleSignOut}>
//         <Text>Sign out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({});


import React from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

const Profile = () => {

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://placekitten.com/200/200'}} 
          style={styles.profileImage} 
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Edit Profile')}>
        <Icon name="edit" size={20} color="#fff" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Settings')}>
        <Icon name="settings" size={20} color="#fff" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Reset Password')}>
        <Icon name="lock" size={20} color="#fff" />
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Other Options')}>
        <Icon name="more-horiz" size={20} color="#fff" />
        <Text style={styles.buttonText}>Other Options</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleSignOut}>
        <Icon name="logout" size={20} color="#fff" />
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: '#888'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16
  },
  logoutButton: {
    backgroundColor: '#ff5c5c'
  }
});
