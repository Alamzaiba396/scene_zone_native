import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming Ionicons for trash icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Assuming FontAwesome for star icon

const appliedRequestsData = [
  {
    id: '1',
    location: 'Noida',
    budget: '$400-$500',
    time: '09:30 AM',
    genres: ['Drums', 'Violin', 'Saxophone', 'Harp', 'Ukulele'],
    rating: 4,
    status: 'pending',
  },
  {
    id: '2',
    location: 'Delhi',
    budget: '$400-$500',
    time: '09:30 AM',
    genres: ['Piano', 'Guitar', 'Vocals'],
    rating: 4,
    status: 'pending',
  },
  // Add more placeholder data here
];

const ArtistAppliedScreen = ({ navigation }) => {
  const renderAppliedItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardImageContainer}>
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>Aug</Text>
            <Text style={styles.dateText}>15</Text>
          </View>
          <TouchableOpacity style={styles.heartIcon}>
             <Icon name="heart" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardRow}>
            <Text style={styles.locationText}>{item.location}</Text>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <Text style={styles.budgetText}>{item.budget}</Text>
          <View style={styles.genresContainer}>
            {item.genres.map((genre, index) => (
              <View key={index} style={styles.genreTag}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
          <View style={styles.starRating}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome
                key={i}
                name={i < item.rating ? 'star' : 'star-o'}
                size={16}
                color={i < item.rating ? '#ffc107' : '#aaa'}
                style={{ marginRight: 2 }}
              />
            ))}
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.requestPendingButton}>
              <Text style={styles.requestPendingText}>Request Pending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton}>
              <Ionicons name="trash-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Applied</Text>
        <View style={{ width: 24 }} />{/* Spacer */}
      </View>
      <FlatList
        data={appliedRequestsData}
        renderItem={renderAppliedItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
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
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginBottom: 12,
    overflow: 'hidden',
  },
  cardImageContainer: {
    width: '100%',
    height: 150, // Adjust height as needed
    backgroundColor: '#333', // Placeholder background color
    justifyContent: 'flex-end', // Align content to bottom
    padding: 12,
  },
  cardContent: {
    padding: 12,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  timeText: {
    fontSize: 14,
    color: '#aaa',
  },
  budgetText: {
    fontSize: 16,
    color: '#a95eff', // Purple color
    marginBottom: 8,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  genreTag: {
    backgroundColor: '#333',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  genreText: {
    fontSize: 12,
    color: '#fff',
  },
  starRating: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestPendingButton: {
    flex: 1,
    backgroundColor: '#ff9800', // Orange color
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  requestPendingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Red color
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  dateText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  heartIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 4,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ArtistAppliedScreen; 