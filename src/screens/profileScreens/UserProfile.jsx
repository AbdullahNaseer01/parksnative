import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors.constant';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const UserProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} // Replace with your image URL
          style={styles.profileImage} 
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.profession}>Software Engineer</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Icon name="person-circle-outline" size={24} color={COLORS.PRIMARY} />
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
        <TouchableOpacity style={{...styles.menuItem, backgroundColor: COLORS.PRIMARY, marginTop: 20}}>
          <View style={styles.menuItemContent}>
            <Icon name="log-out-outline" size={24} color={COLORS.WHITE} />
            <Text style={{...styles.menuText, color: COLORS.WHITE}}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
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
});

export default UserProfileScreen;
