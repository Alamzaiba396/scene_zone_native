import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const ArtistEditProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('Franklin Clinton');
  const [dateOfBirth, setDateOfBirth] = useState('DD/MM/YYYY');
  const [email, setEmail] = useState('scenezone@gmail.com');
  const [address, setAddress] = useState('Location');
  const [genre, setGenre] = useState('Music');
  const [instrument, setInstrument] = useState('Guitar');
  const [budget, setBudget] = useState('500k');
  const [phoneNumber, setPhoneNumber] = useState('412-123-4215');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 24 }} />{/* Spacer */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>

        {/* Profile Image and Camera Icon */}
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImagePlaceholder}>
            {/* <Image source={...} style={styles.profileImage} /> */}
          </View>
          <TouchableOpacity style={styles.cameraIcon}>
            <Ionicons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <Text style={styles.inputLabel}>Full name</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.inputLabel}>Date of Birth</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputIcon}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#aaa"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
          />
           <Icon name="calendar" size={20} color="#aaa" style={styles.icon} />
        </View>

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.inputLabel}>Address</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputIcon}
            placeholder="Location"
            placeholderTextColor="#aaa"
            value={address}
            onChangeText={setAddress}
          />
          <Icon name="map-pin" size={20} color="#aaa" style={styles.icon} />
        </View>

        <Text style={styles.inputLabel}>Genre</Text>
         <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputIcon}
            placeholder="Music"
            placeholderTextColor="#aaa"
            value={genre}
            onChangeText={setGenre}
          />
          <Icon name="chevron-down" size={20} color="#aaa" style={styles.icon} />
        </View>

        <Text style={styles.inputLabel}>Instrument</Text>
         <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputIcon}
            placeholder="Guitar"
            placeholderTextColor="#aaa"
            value={instrument}
            onChangeText={setInstrument}
          />
          <Icon name="chevron-down" size={20} color="#aaa" style={styles.icon} />
        </View>

        <Text style={styles.inputLabel}>Budget</Text>
         <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputIcon}
            placeholder="500k"
            placeholderTextColor="#aaa"
            value={budget}
            onChangeText={setBudget}
            keyboardType="numeric"
          />
          <Icon name="chevron-down" size={20} color="#aaa" style={styles.icon} />
        </View>

        <Text style={styles.inputLabel}>Phone number</Text>
        <View style={styles.phoneNumberContainer}>
            {/* Country code picker placeholder */}
           <View style={styles.countryCodePlaceholder}>
              <View style={styles.flagPlaceholder} />
              <Icon name="chevron-down" size={16} color="#aaa" />
           </View>
           <TextInput
             style={styles.phoneNumberInput}
             value={phoneNumber}
             onChangeText={setPhoneNumber}
             keyboardType="phone-pad"
           />
        </View>

        {/* Performance Gallery */}
        <View style={styles.galleryHeader}>
          <Text style={styles.sectionTitle}>Performance Gallery</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All <Icon name="arrow-right" size={12} color="#a95eff" /></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.galleryContainer}>
           <View style={styles.galleryItem}>
             <Ionicons name="play-circle-outline" size={40} color="#a95eff" />
           </View>
            <View style={styles.galleryItem}>
             <Ionicons name="play-circle-outline" size={40} color="#a95eff" />
           </View>
             <View style={styles.galleryItemSmall}>
             <Ionicons name="play-circle-outline" size={30} color="#a95eff" />
           </View>
            <View style={styles.galleryItemSmall}>
             <Ionicons name="play-circle-outline" size={30} color="#a95eff" />
           </View>
            <View style={styles.galleryItemSmall}>
             <Ionicons name="play-circle-outline" size={30} color="#a95eff" />
           </View>
        </View>

        {/* Upload Button */}
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload</Text>
          <Icon name="upload" size={20} color="#fff" style={styles.uploadIcon} />
        </TouchableOpacity>

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton}>
          <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.saveButtonGradient}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </LinearGradient>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#555', // Placeholder background
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#a95eff',
    borderRadius: 18,
    padding: 8,
   },
  inputLabel: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    color: '#fff',
    fontSize: 16,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  inputIcon: {
    flex: 1,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
  },
   icon: {
    marginLeft: 10,
   },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    overflow: 'hidden',
  },
  countryCodePlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: '#333',
    paddingVertical: 14,
  },
  flagPlaceholder: { // New style for flag placeholder
    width: 24, // Match the size of the original flag icon
    height: 16,
    backgroundColor: '#555', // Placeholder background color
    marginRight: 8,
    borderRadius: 2, // Optional: add slight rounding
   },
  phoneNumberInput: {
    flex: 1,
    paddingHorizontal: 12,
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
   sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
   },
   seeAllText: {
    color: '#a95eff',
    fontSize: 14,
   },
   galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
   },
   galleryItem: {
    width: '48%', // Adjust as needed for spacing
    aspectRatio: 1, // Make it square
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
   },
    galleryItemSmall: {
    width: '30%', // Adjust as needed for spacing
    aspectRatio: 1, // Make it square
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
   },
   uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 10,
   },
   uploadButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 8,
   },
   uploadIcon: {
    color: '#fff',
   },
   saveButton: {
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
   },
   saveButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
   },
   saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
   },
});

export default ArtistEditProfileScreen; 