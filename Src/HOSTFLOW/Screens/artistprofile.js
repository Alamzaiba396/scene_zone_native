import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const ArtistProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card with Background Image */}
        <ImageBackground
          source={require('../assets/Images/Profile1.png')} // Use Profile1.png as background
          style={styles.profileCardBackground}
          imageStyle={styles.profileCardImage}
        >
          <View style={styles.profileCardContent}>
            <View style={styles.profileImagePlaceholder}>
              {/* <Image source={...} style={styles.profileImage} /> */}
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>Kevin Richards</Text>
              <Text style={styles.userContact}>contact@yourdomain.com</Text>
            </View>
            {/* Placeholder for waveform or icon */}
            <View style={styles.iconPlaceholder} />
          </View>
        </ImageBackground>

        {/* Settings Options */}
        <TouchableOpacity style={styles.optionItem}
          onPress={() => navigation.navigate('ArtistEditProfile')}
        >
          <Ionicons name="person-outline" size={24} color="#a95eff" style={styles.optionIcon} />
          <Text style={styles.optionText}>Edit Profile</Text>
          <Icon name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
          onPress={() => navigation.navigate('ArtistGuestList')}
        >
          <Ionicons name="checkmark-circle-outline" size={24} color="#a95eff" style={styles.optionIcon} />
          <Text style={styles.optionText}>Guest List</Text>
          <Icon name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
          onPress={() => navigation.navigate('ArtistPaymentSettings')}
        >
          <MaterialIcons name="payment" size={24} color="#a95eff" style={styles.optionIcon} />
          <Text style={styles.optionText}>Payment Settings</Text>
          <Icon name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
          onPress={() => navigation.navigate('ArtistGeneralSettings')}
        >
          <Ionicons name="settings-outline" size={24} color="#a95eff" style={styles.optionIcon} />
          <Text style={styles.optionText}>General Settings</Text>
          <Icon name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
          onPress={() => navigation.navigate('ArtistHelpCentre')}
        >
          <FontAwesome name="support" size={24} color="#a95eff" style={styles.optionIcon} />{/* Using support for Help Centre */}
          <Text style={styles.optionText}>Help Centre</Text>
          <Icon name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>

         <Text style={styles.appVersionText}>App version 1.0.0.1</Text>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
           <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.logoutButtonGradient}>
             <Text style={styles.logoutButtonText}>Log Out</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    paddingRight: 10,
  },
  profileCardBackground: { // New style for ImageBackground
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 16, // Add padding similar to the original profileCard
  },
  profileCardImage: { // Style for the background image itself
    borderRadius: 10,
  },
   profileCardContent: { // Container for the content inside ImageBackground
    flexDirection: 'row',
    alignItems: 'center',
   },
  profileImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#555', // Placeholder background
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  userContact: {
    fontSize: 14,
    color: '#eee',
  },
   iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)', // Semi-transparent placeholder
    borderRadius: 20,
   },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 16,
  },
  optionIcon: {
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
   appVersionText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
   },
  logoutButton: {
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
   logoutButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
   },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ArtistProfileScreen; 