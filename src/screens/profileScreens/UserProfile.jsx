import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  ToastAndroid,
} from 'react-native';
import {COLORS} from '../../constants/colors.constant';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

const UserProfileScreen = () => {
  const Navigation = useNavigation();

  const user = useSelector(state => state.auth.user);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(error => console.log('Error signing out: ', error));
    ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }} // Replace with your image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.profession}>Software Engineer</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            Navigation.navigate('editProfile');
          }}>
          <View style={styles.menuItemContent}>
            <Icon
              name="person-circle-outline"
              size={24}
              color={COLORS.PRIMARY}
            />
            <Text style={styles.menuText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="settings-outline" size={24} color={COLORS.PRIMARY} />
            <Text style={styles.menuText}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="help-circle-outline" size={24} color={COLORS.PRIMARY} />
            <Text style={styles.menuText}>Support Services</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="lock-closed-outline" size={24} color={COLORS.PRIMARY} />
            <Text style={styles.menuText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuItem,
            backgroundColor: COLORS.PRIMARY,
            marginTop: 20,
          }}
          onPress={() => setModalVisible(true)} // Open the modal on press
        >
          <View style={styles.menuItemContent}>
            <Icon name="log-out-outline" size={24} color={COLORS.WHITE} />
            <Text style={{...styles.menuText, color: COLORS.WHITE}}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout confirmation modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={{...styles.modalButton, backgroundColor: COLORS.PRIMARY}}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{color: COLORS.WHITE}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleSignOut}
              >
                <Text style={{color: COLORS.WHITE}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profession: {
    fontSize: 18,
    color: 'gray',
  },
  menuContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    alignItems: 'flex-start',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: COLORS.PRIMARY,
  },
});

export default UserProfileScreen;
