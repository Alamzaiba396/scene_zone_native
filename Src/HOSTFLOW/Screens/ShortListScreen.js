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

const ShortlistScreen = ({ navigation }) => {
  const [theme, setTheme] = useState('dark'); // Theme state ('dark' or 'light')
  const [shortlistedItems, setShortlistedItems] = useState({}); // Track shortlisted status

  // Sample data for shortlisted events (using local assets)
  const shortlistData = [
    {
      id: '1',
      genre: 'ROCK',
      budget: '$50,000',
      image: require('../assets/Images/shortlist1.png'), // Local asset for event image
    },
    {
      id: '2',
      genre: 'ROCK',
      budget: '$50,000',
      image: require('../assets/Images/shortlist1.png'), // Local asset for event image
    },
    {
      id: '3',
      genre: 'CROWD GUARANTEE',
      budget: '$50,000',
      image: require('../assets/Images/shortlist1.png'), // Local asset for event image
    },
  ];

  // Theme colors
  const themes = {
    dark: {
      backgroundColor: '#000',
      textColor: '#fff',
      subColor: '#ccc',
      cardBackground: '#1a1a1a',
      activeTabBackground: '#a95eff',
      navBackground: '#1a1a1a',
    },
    light: {
      backgroundColor: '#fff',
      textColor: '#000',
      subColor: '#666',
      cardBackground: '#f0f0f0',
      activeTabBackground: '#a95eff',
      navBackground: '#e0e0e0',
    },
  };

  const currentTheme = themes[theme];

  // Toggle shortlist status for an event
  const toggleShortlist = (id) => {
    setShortlistedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Render each shortlist item
  const renderShortlistItem = ({ item }) => {
    const isShortlisted = shortlistedItems[item.id] || false;

    return (
      <View style={styles.eventCard}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.eventImage}
            resizeMode="cover"
          />
          {/* Overlay with Plus/Minus Button */}
          <TouchableOpacity
            style={styles.overlayButton}
            onPress={() => toggleShortlist(item.id)}
          >
            <Feather
              name={isShortlisted ? 'minus' : 'plus'}
              size={16}
              color={currentTheme.textColor}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[styles.eventDetails, { backgroundColor: currentTheme.cardBackground }]}
        >
          <View style={styles.iconCircle}>
            <Image
              source={require('../assets/Images/cardlayout.png')} // Local asset for icon
              style={styles.eventIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            {/* Genre and Budget as Buttons */}
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={[styles.tagText, { color: currentTheme.textColor }]}>
                  {item.genre}
                </Text>
              </View>
              <View style={styles.tag}>
                <Text style={[styles.tagText, { color: currentTheme.textColor }]}>
                  {item.budget}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.backgroundColor }]}>
      {/* Header with Tabs */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, styles.activeTab, { backgroundColor: currentTheme.activeTabBackground }]}
        >
          <Text style={[styles.tabText, { color: currentTheme.textColor }]}>Shortlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, { backgroundColor: currentTheme.cardBackground }]}
          onPress={() => navigation.navigate('EventDashboardScreen')}
        >
          <Text style={[styles.tabText, { color: currentTheme.subColor }]}>Manage Event</Text>
        </TouchableOpacity>
      </View>

      {/* Shortlist Title */}
      <Text style={[styles.title, { color: currentTheme.textColor }]}>Shortlists</Text>

      {/* Event List */}
      <FlatList
        data={shortlistData}
        renderItem={renderShortlistItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Bottom Navigation (Commented out as per your code, but can be uncommented if needed) */}
      {/*
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
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Feather name="list" size={24} color={currentTheme.textColor} />
          <Text style={[styles.navText, { color: currentTheme.textColor }]}>Shortlists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('ProfileScreen')}
        >
          <Feather name="user" size={24} color={currentTheme.subColor} />
          <Text style={[styles.navText, { color: currentTheme.subColor }]}>Profile</Text>
        </TouchableOpacity>
      </View>
      */}

      {/* Theme Toggle (for testing purposes) */}
      <TouchableOpacity
        style={styles.themeToggle}
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {/* <Text style={[styles.themeToggleText, { color: currentTheme.textColor }]}>
          Toggle Theme
        </Text> */}
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
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: width * 0.03, // Responsive padding
    marginTop: Platform.OS === 'ios' ? 0 : 30, // Adjust for Android status bar
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  activeTab: {
    // Background color set dynamically in the component
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: width * 0.03,
    marginVertical: 16,
  },
  listContainer: {
    paddingHorizontal: width * 0.03,
    paddingBottom: 80,
  },
  eventCard: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: width * 0.55, // Responsive height based on width (317x215 ratio)
  },
  overlayButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#a95eff',
    borderRadius: 50,
    padding: 8,
  },
  eventDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  iconCircle: {
    backgroundColor: '#a95eff',
    borderRadius: 50,
    padding: 8,
    marginRight: 12,
    width: 32, // Fixed size for the circle
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventIcon: {
    width: 16, // Adjust size to fit within the circle
    height: 16,
  },
  textContainer: {
    flex: 1,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#333',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: {
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

export default ShortlistScreen;