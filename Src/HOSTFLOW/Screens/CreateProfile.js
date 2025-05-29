import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CreateProfile = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [genre, setGenre] = useState('');
  const [instrument, setInstrument] = useState('');
  const [budget, setBudget] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    // Handle profile creation logic here
    navigation.navigate('ArtistHome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/Images/frame1.png')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <MaterialIcons name="camera-alt" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Full name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Franklin Clinton"
            placeholderTextColor="#aaa"
          />
        </View>

        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#aaa"
          />
          <MaterialIcons name="calendar-today" size={20} color="#aaa" />
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="scenezone@gmail.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.label}>Address</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Location"
            placeholderTextColor="#aaa"
          />
          <MaterialIcons name="location-on" size={20} color="#aaa" />
        </View>

        <Text style={styles.label}>Genre</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={genre}
            onChangeText={setGenre}
            placeholder="Music"
            placeholderTextColor="#aaa"
          />
           <MaterialIcons name="keyboard-arrow-down" size={20} color="#aaa" />
        </View>

        <Text style={styles.label}>Instrument</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={instrument}
            onChangeText={setInstrument}
            placeholder="Guitar"
            placeholderTextColor="#aaa"
          />
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#aaa" />
        </View>

        <Text style={styles.label}>Budget</Text>
         <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={budget}
            onChangeText={setBudget}
            placeholder="500k"
            placeholderTextColor="#aaa"
          />
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#aaa" />
        </View>

        <Text style={styles.label}>Phone number</Text>
         <View style={styles.inputContainer}>
             {/* Country code input would go here */}
             <Text style={{color: '#fff'}}>🇮🇳 ▼</Text>
          <TextInput
            style={[styles.input, {marginLeft: 10}] }
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="412-123-4215"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.galleryHeader}>
          <Text style={styles.label}>Performance Gallery</Text>
          <TouchableOpacity>
             <Text style={styles.seeAllText}>See All →</Text>
          </TouchableOpacity>
        </View>

        {/* Placeholder for performance gallery items */}
        <View style={styles.galleryPlaceholderContainer}>
           <View style={styles.galleryPlaceholderItem}>
              <Icon name="play-circle" size={40} color="#a95eff" />
           </View>
            <View style={styles.galleryPlaceholderItem}>
               <Icon name="play-circle" size={40} color="#a95eff" />
            </View>
        </View>
         <View style={styles.galleryPlaceholderContainer}>
           <View style={styles.galleryPlaceholderItem}>
              <Icon name="play-circle" size={40} color="#a95eff" />
           </View>
            <View style={styles.galleryPlaceholderItem}>
               <Icon name="play-circle" size={40} color="#a95eff" />
            </View>
             <View style={styles.galleryPlaceholderItem}>
               <Icon name="play-circle" size={40} color="#a95eff" />
            </View>
        </View>

        <TouchableOpacity style={styles.uploadButton}>
           <Text style={styles.uploadButtonText}>Upload</Text>
           <Icon name="upload" size={20} color="#fff" style={{marginLeft: 5}} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
   scrollContent: {
    padding: 20,
    paddingBottom: 50, // Add padding to the bottom to ensure the last button is visible
  },
  avatarContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#a95eff',
    borderRadius: 20,
    padding: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 48,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
   galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  seeAllText: {
    color: '#a95eff',
    fontSize: 14,
    fontWeight: '600',
  },
  galleryPlaceholderContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
  },
  galleryPlaceholderItem:{
      width: '32%',
      aspectRatio: 1, // To maintain square aspect ratio
      backgroundColor: '#1a1a1a',
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center',
  },
  uploadButton:{
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#555',
  },
  uploadButtonText:{
     color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#a95eff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateProfile; 