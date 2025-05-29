import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const initialEvents = [
  {
    id: '1',
    title: 'Beats Unleashed',
    location: 'Noida',
    date: { month: 'May', day: '20' },
    tags: ['Rock', 'Classical', 'Jazz', 'Piano', 'Guitar'],
    description:
      'Come along for an unforgettable evening filled with live music! Feel the beat and excitement!',
    image: require('../assets/Images/swiper.png'),
  },
  {
    id: '2',
    title: 'Midnight Melodies',
    location: 'Mumbai',
    date: { month: 'Feb', day: '12' },
    tags: ['Pop', 'EDM'],
    description: 'Experience the electrifying energy of live performances under the stars!',
    image: require('../assets/Images/swiper.png'),
  },
];

const EventScreen = ({ navigation }) => {
  const isDark = useColorScheme() === 'dark';
  const [events, setEvents] = useState(initialEvents);

  const textColor = '#fff'; // Force white text for visibility
  const subText = '#aaa'; // Light gray for secondary text

  const addEvent = () => {
    // Navigate to the CreateEventScreen and pass setEvents to update the events list
    navigation.navigate('NewEvent', { setEvents, events });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#000' }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerRow}>
          <Text style={[styles.title, { color: textColor }]}>Events</Text>
          <Feather name="calendar" size={22} color={textColor} />
        </View>

        {events.map((event) => (
          <View
            key={event.id}
            style={[
              styles.card,
              { backgroundColor: event.id === '1' || event.id === '2' ? '#000' : (isDark ? '#1c1c1c' : '#f9f9f9') }
            ]}
          >
            <View style={styles.imageWrapper}>
              <Image source={event.image} style={styles.cardImage} />
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>{event.date.month}</Text>
                <Text style={styles.dateDay}>{event.date.day}</Text>
              </View>
              <View style={styles.statusTag}>
                <Text style={styles.statusText}>Upcoming</Text>
              </View>
            </View>

            <View style={styles.cardContent}>
              <Text style={[styles.location, { color: textColor }]}>
                {event.title}
              </Text>
              <View style={styles.tags}>
                {event.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={[styles.tagText, { color: textColor }]}>{tag}</Text>
                  </View>
                ))}
              </View>
              <Text style={[styles.description, { color: subText }]}>{event.description}</Text>

              <View style={styles.ratingRow}>
                {[...Array(5)].map((_, i) => (
                  <MaterialIcons key={i} name="star" size={16} color="#FFD700" />
                ))}
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity onPress={() => navigation.navigate('Explore')} style={styles.exploreButton}>
                  <Text style={styles.exploreText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.trashButton}
                  onPress={() =>
                    setEvents(events.filter((e) => e.id !== event.id))
                  }
                >
                  <Feather name="trash" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating + Icon to Navigate to CreateEventScreen */}
      <TouchableOpacity style={styles.floatingPlus} onPress={addEvent}>
        <Feather name="plus" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scroll: { padding: 20 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 20, fontWeight: '700' }, // Removed marginTop
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  imageWrapper: {
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: width * 0.55,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  dateBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#333', // Slightly lighter than #000 for contrast
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
  },
  dateText: { color: '#fff', fontSize: 10 },
  dateDay: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  statusTag: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#a95eff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: { color: '#fff', fontSize: 12 },
  cardContent: { padding: 16 },
  location: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 6,
  },
  tagText: {
    color: '#fff', // Ensure tag text is white
    fontSize: 10,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreButton: {
    flex: 1,
    backgroundColor: '#a95eff',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  exploreText: {
    color: '#fff',
    fontWeight: '600',
  },
  trashButton: {
    backgroundColor: '#a95eff',
    padding: 12,
    borderRadius: 10,
  },
  floatingPlus: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#a95eff',
    borderRadius: 25,
    padding: 14,
    elevation: 5,
  },
});

export default EventScreen;