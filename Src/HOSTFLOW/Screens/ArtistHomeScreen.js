import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const latestEventsData = [
  {
    id: '1',
    image: require('../assets/Images/ffff.jpg'), // Use the specified image
    dateMonth: 'Aug',
    dateDay: '15',
    location: 'Noida',
    budget: '$400-$500',
    time: '09:30 AM',
    rating: 4, // Example rating
    tags: ['Drums', 'Violin', 'Saxophone', 'Harp', 'Ukulele'],
    hasGuestList: true,
  },
    {
    id: '2',
    image: require('../assets/Images/Cover.png'), // Use the specified image
    dateMonth: 'Nov',
    dateDay: '30',
    location: 'Delhi',
    budget: '$300-$400',
    time: '07:00 PM',
    rating: 3, // Example rating
    tags: ['Piano', 'Guitar', 'Vocals'],
    hasGuestList: false,
  }
  // Add more placeholder event data here
];

const ArtistHomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const renderEventItem = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.dateOverlay}>
        <Text style={styles.dateMonth}>{item.dateMonth}</Text>
        <Text style={styles.dateDay}>{item.dateDay}</Text>
      </View>
       <TouchableOpacity style={styles.heartIcon}>
         <Ionicons name="heart-outline" size={24} color="#fff" />
       </TouchableOpacity>
      <View style={styles.eventContent}>
        <Text style={styles.eventLocation}>{item.location}</Text>
        <View style={styles.eventDetailsRow}>
          <Text style={styles.eventBudget}>{item.budget}</Text>
          <Text style={styles.eventTime}>{item.time}</Text>
        </View>
         <View style={styles.starRating}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name={i < item.rating ? 'star' : 'star'}
                  size={16}
                  color={i < item.rating ? '#ffc107' : '#aaa'}
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <View style={styles.guestListRow}>
            <Text style={styles.guestListText}>Do You Have a Guest List?</Text>
             <TouchableOpacity>
                {/* Replace with a proper Toggle component */}
                <View style={styles.togglePlaceholder} />
            </TouchableOpacity>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.applyButton}>
              <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.applyButtonGradient}>
                 <Text style={styles.applyButtonText}>Apply</Text>
              </LinearGradient>
          </TouchableOpacity>
           <TouchableOpacity style={styles.bookmarkButton}>
             <Icon name="bookmark" size={24} color="#a95eff" />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello Brandon!</Text>
            <View style={styles.locationContainer}>
              <MaterialIcons name="location-on" size={16} color="#a95eff" />
              <Text style={styles.locationText}>H-70, Sector 63, Noida</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon} onPress={() => navigation.navigate('ArtistNotification')}>
            <Icon name="bell" size={24} color="#fff" />
             {/* Notification dot */}
             <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#aaa" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Event"
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Filter Buttons */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
             <Ionicons name="grid" size={18} color="#fff" style={styles.filterIcon} />
            <Text style={styles.filterButtonText}>All</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="musical-notes" size={18} color="#aaa" style={styles.filterIcon} />
            <Text style={[styles.filterButtonText, styles.filterButtonTextInactive]}>Genre</Text>
          </TouchableOpacity>
           <TouchableOpacity style={styles.filterButton}>
              <FontAwesome name="dollar" size={18} color="#aaa" style={styles.filterIcon} />
            <Text style={[styles.filterButtonText, styles.filterButtonTextInactive]}>Budget</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Icon name="calendar" size={18} color="#aaa" style={styles.filterIcon} />
            <Text style={[styles.filterButtonText, styles.filterButtonTextInactive]}>Date</Text>
          </TouchableOpacity>
             <TouchableOpacity style={styles.filterButton}>
              <Icon name="map-pin" size={18} color="#aaa" style={styles.filterIcon} />
            <Text style={[styles.filterButtonText, styles.filterButtonTextInactive]}>Location</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Latest Events */}
        <View style={styles.latestEventsContainer}>
          <Text style={styles.latestEventsTitle}>Latest Events</Text>
          <TouchableOpacity>
             <Text style={styles.seeAllText}>See All <Icon name="arrow-right" size={12} color="#a95eff" /></Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={latestEventsData}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id}
        />

      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="#a95eff" />
          <Text style={[styles.navButtonText, styles.navButtonTextActive]}>Home</Text>
           <View style={styles.activeTabIndicator} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}
          onPress={() => navigation.navigate('ArtistApplied')}
        >
          <Ionicons name="musical-notes-outline" size={24} color="#aaa" />
          <Text style={styles.navButtonText}>Applied</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}
          onPress={() => navigation.navigate('ArtistInbox')}
        >
          <Ionicons name="download-outline" size={24} color="#aaa" />
          <Text style={styles.navButtonText}>Inbox</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton}
          onPress={() => navigation.navigate('ArtistProfile')}
        >
          <Ionicons name="person-outline" size={24} color="#aaa" />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a95eff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#aaa',
    marginLeft: 4,
  },
  notificationIcon: {
    padding: 8,
     position: 'relative',
  },
    notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
  },
  filterContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
    filterButtonActive: {
        backgroundColor: '#a95eff',
    },
   filterIcon:{
     marginRight: 5,
   },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
    filterButtonTextInactive: {
        color: '#aaa',
    },
  latestEventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  latestEventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  seeAllText: {
    color: '#a95eff',
    fontSize: 14,
    fontWeight: '600',
  },
  eventCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    width: width * 0.8, // Adjust card width as needed
    marginBottom: 15,
    overflow: 'hidden',
    alignSelf: 'center', // Center the card horizontally
  },
  eventImage: {
    width: '100%',
    height: 150, // Adjust image height as needed
    resizeMode: 'cover',
  },
   dateOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#000000aa',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  dateMonth: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  dateDay: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
    heartIcon: {
     position: 'absolute',
     top: 10,
     right: 10,
     zIndex: 1, // Ensure heart icon is above image
    },
  eventContent: {
    padding: 12,
  },
  eventLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
   eventDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  eventBudget: {
    fontSize: 14,
    color: '#a95eff',
  },
  eventTime: {
    fontSize: 14,
    color: '#aaa',
  },
   starRating: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    fontSize: 12,
    color: '#fff',
  },
    guestListRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
    guestListText: {
     fontSize: 14,
    color: '#fff',
    },
    togglePlaceholder: {
     width: 40, // Adjust size as needed
     height: 20,
     backgroundColor: '#555', // Placeholder color
     borderRadius: 10,
    },
   actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   },
    applyButton: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 10,
    },
    applyButtonGradient: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    },
    applyButtonText: {
     color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    },
    bookmarkButton: {
     padding: 8,
    },

  // New styles for bottom navigation
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    paddingVertical: 5,
    paddingBottom: 10, // Adjust for home bar indicator
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     position: 'relative',
  },
  navButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#aaa',
    marginTop: 4,
  },
   navButtonTextActive: {
    color: '#a95eff',
   },
   activeTabIndicator: {
    position: 'absolute',
    top: -5,
    width: 30, // Adjust width as needed
    height: 3, // Adjust height as needed
    backgroundColor: '#a95eff',
    borderRadius: 1.5,
   },
});

export default ArtistHomeScreen;