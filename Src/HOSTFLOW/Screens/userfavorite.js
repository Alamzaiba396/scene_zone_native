import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites, toggleFavorite } from '../Redux/slices/favoritesSlice';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const UserFavoriteScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  // Event data mapping (you can move this to a separate data file)
  const eventData = {
    'featured_event_1': {
      title: 'Another Music Festival',
      location: 'Some City, India',
      image: require('../assets/Images/fff.jpg'),
    },
    'upcoming_event_1': {
      title: 'Stand-up Comedy Night',
      location: 'Comedy Club, City',
      image: require('../assets/Images/rr.png'),
    },
    'upcoming_event_2': {
      title: 'Basketball Game',
      location: 'Sports Stadium, City',
      image: require('../assets/Images/wall.jpg'),
    },
    'upcoming_event_3': {
      title: 'Harmony Jam 2024',
      location: 'Noida, India',
      price: '₹25.00 -₹125.00',
      image: require('../assets/Images/ffff.jpg'),
    },
    'upcoming_event_4': {
      title: 'Rhythm Rally 2024',
      location: 'Delhi, India',
      price: '₹25.00 -₹125.00',
      image: require('../assets/Images/px.png'),
    },
    'upcoming_event_5': {
      title: 'Third Event Example',
      location: 'Mumbai, India',
      image: require('../assets/Images/pxx.png'),
    },
  };

  const handleFavoriteToggle = (eventId) => {
    dispatch(toggleFavorite(eventId));
  };

  const favoritedEvents = Object.entries(favorites)
    .filter(([_, isFavorite]) => isFavorite)
    .map(([eventId]) => eventId);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('userformbooking.js')}>
          <Text style={styles.headerTitle}>My Favorites</Text>
        </TouchableOpacity>
        <View style={{ width: 24 }} /> {/* Spacer to center the title */}
      </View>

      <ScrollView style={styles.content}>
        {favoritedEvents.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={64} color="#555" />
            <Text style={styles.emptyStateText}>No favorites yet</Text>
            <Text style={styles.emptyStateSubText}>
              Add events to your favorites by tapping the heart icon
            </Text>
          </View>
        ) : (
          favoritedEvents.map((eventId) => {
            const event = eventData[eventId];
            if (!event) return null;

            return (
              <View key={eventId} style={styles.eventCard}>
                <LinearGradient
                  colors={['#B15CDE', '#7952FC']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.eventCardGradient}
                />
                <TouchableOpacity style={styles.eventCardContent} onPress={() => navigation.navigate('UserFormBookingScreen', { eventDetails: event })}>
                  <Image
                    source={event.image}
                    style={styles.eventImage}
                    resizeMode="cover"
                  />
                  <View style={styles.imageOverlay} />
                  <TouchableOpacity
                    style={styles.heartIcon}
                    onPress={() => handleFavoriteToggle(eventId)}
                  >
                    <Ionicons name="heart" size={24} color="#ff4444" />
                  </TouchableOpacity>
                  <View style={styles.eventDetails}>
                    <Text style={styles.eventTitle}>{event.title}</Text>
                    {event.price && (
                      <Text style={styles.eventPrice}>{event.price}</Text>
                    )}
                    <Text style={styles.eventLocation}>{event.location}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })
        )}
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
  },
  content: {
    flex: 1,
    padding: 16,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  emptyStateSubText: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 32,
  },
  eventCard: {
    marginBottom: 16,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  eventCardGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  eventCardContent: {
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 8,
    zIndex: 2,
  },
  eventDetails: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    zIndex: 2,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  eventPrice: {
    fontSize: 14,
    color: '#a95eff',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#aaa',
  },
});

export default UserFavoriteScreen; 