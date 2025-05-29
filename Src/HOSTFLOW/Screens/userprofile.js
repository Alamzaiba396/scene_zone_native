import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const UserProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />{/* Spacer to align title */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <LinearGradient
          colors={['#B15CDE', '#7952FC']} // Purple gradient colors
          start={{ x: 0, y: 0 }} // Start gradient at top-left
          end={{ x: 1, y: 1 }} // End gradient at bottom-right
          style={styles.profileCardGradient}
        >
          <View style={styles.profileCardContent}>
            <Image
              source={require('../assets/Images/frame1.png')} // Placeholder image
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Kevin Richards</Text>
              <Text style={styles.profileEmail}>contact@yourdomain.com</Text>
            </View>
            {/* Audio Wave Icon Placeholder */}
            <Ionicons name="musical-notes-outline" size={40} color="rgba(255,255,255,0.3)" style={styles.audioWaveIcon} />
          </View>
        </LinearGradient>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserEditProfileScreen')}>
            <MaterialIcons name="person-outline" size={24} color="#a95eff" />
            <Text style={styles.menuItemText}>Edit Profile</Text>
            <MaterialIcons name="chevron-right" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserAccountSecurityScreen')}>
            <MaterialCommunityIcons name="shield-check-outline" size={24} color="#a95eff" />
            <Text style={styles.menuItemText}>Account Security</Text>
            <MaterialIcons name="chevron-right" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserPaymentSettingsScreen')}>
            <MaterialIcons name="payment" size={24} color="#a95eff" />
            <Text style={styles.menuItemText}>Payment Settings</Text>
            <MaterialIcons name="chevron-right" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserGeneralSettingsScreen')}>
            <Ionicons name="settings-outline" size={24} color="#a95eff" />
            <Text style={styles.menuItemText}>General Settings</Text>
            <MaterialIcons name="chevron-right" size={24} color="#555" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserHelpCentreScreen')}>
            <MaterialIcons name="help-outline" size={24} color="#a95eff" />
            <Text style={styles.menuItemText}>Help Centre</Text>
            <MaterialIcons name="chevron-right" size={24} color="#555" />
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <Text style={styles.appVersionText}>App version 1.0.0.1</Text>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
           <Text style={styles.logoutButtonText}>Log Out</Text>
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
    borderColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1, // Allow title to take up space
    textAlign: 'center', // Center the text
  },
  profileCardGradient: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10,
    padding: 20,
  },
  profileCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 60,
    borderRadius: 20,
    marginRight: 30,
    backgroundColor: '#ddd', // Placeholder background
  },
  profileInfo: {
    flex: 1,
    paddingRight: 100, // Add padding to the right
    marginRight: 60, // Add a right margin to make space for the icon
  },
  profileName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#eee',
  },
  profileNameEmailImage: {
    width: '100%%',
    height: 20, // Adjust height as needed to fit content
  },
  audioWaveIcon: {
      position: 'absolute',
      right: 3,
      opacity: 0.5, // Make it semi-transparent
  },
  menuContainer: {
    marginHorizontal: 16,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a', // Dark background
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  menuItemText: {
    flex: 1, // Take up available space
    fontSize: 16,
    color: '#fff',
    marginLeft: 15,
  },
  appVersionText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    marginHorizontal: 16,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a95eff', // Purple border color
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a95eff', // Purple text color
  },
});

export default UserProfileScreen; 