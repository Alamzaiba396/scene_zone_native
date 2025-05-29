import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const UserEditProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} />{/* Spacer to center the title */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Profile Image Section */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../assets/Images/Avatar.png')} // User Avatar
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <MaterialIcons name="camera-alt" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full name</Text>
          <TextInput
            style={styles.input}
            value="Franklin Clinton"
            placeholder="Full Name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value="franklinclinton@gmail.com"
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Location</Text>
          <TextInput
            style={styles.input}
            value="Noida"
            placeholder="Location"
            placeholderTextColor="#888"
          />
        </View>

        {/* Phone Number Input */}
         <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone number</Text>
           <View style={styles.phoneInputContainer}>
               {/* Country Code Picker Placeholder */}
               <View style={styles.countryCodePicker}>
                   <Text style={{color: '#fff'}}>📞</Text> {/* Placeholder Icon */}
                   <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
               </View>
                <TextInput
                style={styles.phoneInput}
                value="123456789"
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
              />
           </View>
        </View>



      </ScrollView>

      {/* Save Changes Button */}
      <TouchableOpacity style={styles.saveButton}>
        <LinearGradient
          colors={['#B15CDE', '#7952FC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 100, // Add padding at the bottom for the button
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ddd', // Placeholder background
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#a95eff', // Purple background
    borderRadius: 15,
    padding: 6,
    borderWidth: 2,
    borderColor: '#000', // Border to match the image
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#1a1a1a', // Dark input background
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
  },
    phoneInputContainer: {
        flexDirection: 'row',
        backgroundColor: '#1a1a1a', // Dark input background
        borderRadius: 10,
        alignItems: 'center',
    },
     countryCodePicker: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderColor: '#333',
        paddingVertical: 12,
     },
    phoneInput: {
        flex: 1,
        color: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
    },
  saveButton: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', // To make gradient respect border radius
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default UserEditProfileScreen; 