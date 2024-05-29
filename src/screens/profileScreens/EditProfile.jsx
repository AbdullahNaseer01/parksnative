import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors.constant';
import CustomTextInput from '../../components/TextInput';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');

  const handleSave = () => {
    // Save profile details logic
    console.log({ name, email, address, contactNo, gender, bio });
  };

  const handleChangePassword = () => {
    // Change password logic
    console.log('Change Password Pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: COLORS.PRIMARY,
        textAlign: 'center',


      }}>Personal Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
      
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact No</Text>
        <TextInput
          style={styles.input}
          value={contactNo}
          onChangeText={setContactNo}
          placeholder="Enter your contact number"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity style={styles.radioButton} onPress={() => setGender('Male')}>
            <View style={[styles.radioCircle, gender === 'Male' && styles.selectedRadio]} />
            <Text style={styles.radioText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioButton} onPress={() => setGender('Female')}>
            <View style={[styles.radioCircle, gender === 'Female' && styles.selectedRadio]} />
            <Text style={styles.radioText}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={styles.input}
          value={bio}
          onChangeText={setBio}
          placeholder="Enter your bio"
          multiline
        />
      </View>

    

      <Text style={styles.label}>Additional Info:</Text>
      <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
        <Text style={styles.changePasswordButtonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  changePasswordButton: {
    backgroundColor:COLORS.PRIMARY,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  changePasswordButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
