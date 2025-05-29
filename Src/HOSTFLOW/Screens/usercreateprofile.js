import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const UserCreateProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleContinue = () => {
    // Handle continue logic here
    console.log('Continue pressed');
    // Navigate to the next screen (User Home Screen)
    navigation.navigate('UserHome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Profile</Text>
      </View>
      
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewContent}>
          {/* Profile Image and Camera Icon */}
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../assets/Images/frame1.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.cameraIconContainer}>
              <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Franklin Clinton"
            placeholderTextColor="#aaa"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#aaa"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
              keyboardType="numeric"
            />
            <Ionicons name="calendar-outline" size={20} color="#aaa" style={styles.inputFieldIcon} />
          </View>

          <Text style={styles.label}>Phone number</Text>
          <View style={styles.inputWithIcon}>
            <View style={styles.countryCodePlaceholder}>
              <Ionicons name="chevron-down" size={16} color="#aaa" />
            </View>
            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              placeholder="412-123-4215"
              placeholderTextColor="#aaa"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="scenezone@gmail.com"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Address</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              placeholder="Location"
              placeholderTextColor="#aaa"
              value={address}
              onChangeText={setAddress}
            />
            <Ionicons name="location-outline" size={20} color="#aaa" style={styles.inputFieldIcon} />
          </View>
        </ScrollView>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.continueButtonGradient}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 120,
  },
  buttonContainer: {
    padding: 16,
    paddingBottom: 24,
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333', // Placeholder background
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#a95eff',
    borderRadius: 20,
    padding: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  label: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 50,
  },
  inputFieldIcon: {
    marginLeft: 10,
  },
  countryCodePlaceholder: {
     flexDirection: 'row',
     alignItems: 'center',
     marginRight: 10,
     paddingRight: 10,
     borderRightWidth: 1,
     borderRightColor: '#333',
  },
  flagIcon: {
     width: 24,
     height: 16,
     marginRight: 5,
  },
  continueButton: {
    width: '100%',
    borderRadius: 40,
    overflow: 'hidden',
  },
  continueButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserCreateProfileScreen; 