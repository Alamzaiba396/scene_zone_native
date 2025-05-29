import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  const [theme, setTheme] = useState('dark'); // Theme state ('dark' or 'light')

  // Sample data for "My Events"
  const eventData = [
    {
      id: '1',
      title: 'Event Name',
      date: '12 Aug 2025',
      time: '12:00 PM',
      image: require('../assets/Images/Profile1.png'), // Local asset
    },
    {
      id: '2',
      title: 'Event Name',
      date: '12 Aug 2025',
      time: '12:00 PM',
      image: require('../assets/Images/Profile1.png'), // Local asset
    },
  ];

  // Theme colors
  const themes = {
    dark: {
      backgroundColor: '#000',
      textColor: '#fff',
      subColor: '#ccc',
      cardBackground: '#1a1a1a',
      navBackground: '#1a1a1a',
    },
    light: {
      backgroundColor: '#fff',
      textColor: '#000',
      subColor: '#666',
      cardBackground: '#f0f0f0',
      navBackground: '#e0e0e0',
    },
  };

  const currentTheme = themes[theme];

  // Render each event item
  const renderEventItem = ({ item }) => (
    <View style={[styles.eventCard, { backgroundColor: currentTheme.cardBackground }]}>
      <Image
        source={item.image}
        style={styles.eventImage}
        resizeMode="cover"
      />
      <View style={styles.eventDetails}>
        <Text style={[styles.eventTitle, { color: currentTheme.textColor }]}>
          {item.title}
        </Text>
        <Text style={[styles.eventDateTime, { color: currentTheme.subColor }]}>
          {item.date} | {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={currentTheme.textColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentTheme.textColor }]}>
          Sansa Stark
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={24} color={currentTheme.textColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="edit" size={24} color={currentTheme.textColor} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/Images/Profile1.png')} // Local asset
          style={styles.profilePicture}
          resizeMode="cover"
        />
        <Text style={[styles.profileName, { color: currentTheme.textColor }]}>
          Sansa Stark
        </Text>
        <Text style={[styles.profileEmail, { color: currentTheme.subColor }]}>
          sansastark@gmail.com
        </Text>
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* My Events Section */}
      <Text style={[styles.sectionTitle, { color: currentTheme.textColor }]}>
        My Events
      </Text>
      <FlatList
        data={eventData}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: currentTheme.navBackground }]}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Feather name="home" size={24} color={currentTheme.subColor} />
          <Text style={[styles.navText, { color: currentTheme.subColor }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('EventDashboardScreen')}
        >
          <Feather name="calendar" size={24} color={currentTheme.subColor} />
          <Text style={[styles.navText, { color: currentTheme.subColor }]}>Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ShortlistScreen')}
        >
          <Feather name="list" size={24} color={currentTheme.subColor} />
          <Text style={[styles.navText, { color: currentTheme.subColor }]}>Shortlists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Feather name="user" size={24} color={currentTheme.textColor} />
          <Text style={[styles.navText, { color: currentTheme.textColor }]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Theme Toggle (for testing purposes) */}
      <TouchableOpacity
        style={styles.themeToggle}
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Text style={[styles.themeToggleText, { color: currentTheme.textColor }]}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.03, // Responsive padding
    paddingVertical: 10,
    marginTop: Platform.OS === 'ios' ? 0 : 30, // Adjust for Android status bar
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    padding: 5,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 15,
  },
  changePasswordButton: {
    backgroundColor: '#a95eff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  changePasswordText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: width * 0.03,
    marginVertical: 16,
  },
  listContainer: {
    paddingHorizontal: width * 0.03,
    paddingBottom: 80, // Space for bottom navigation
  },
  eventCard: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  eventImage: {
    width: width * 0.3, // Responsive width
    height: width * 0.2, // Maintain aspect ratio
  },
  eventDetails: {
    flex: 1,
    padding: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  eventDateTime: {
    fontSize: 12,
    fontWeight: '400',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavItem: {
    // No additional styling for active state, just color change
  },
  navText: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 4,
  },
  themeToggle: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#a95eff',
  },
  themeToggleText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ProfileScreen;