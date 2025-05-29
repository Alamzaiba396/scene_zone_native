import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const notificationsData = [
  {
    id: '1',
    type: 'booking',
    budget: '$500',
    genre: 'Rock',
    date: '06 Feb 2025',
    rating: 4,
  },
  {
    id: '2',
    type: 'guest_list',
    user: 'User 23',
    date: '06 Feb 2025',
    rating: 4,
  },
  // Add more placeholder notification data here
  { id: '3', type: 'placeholder', text: 'Notifications' },
  { id: '4', type: 'placeholder', text: 'Notifications' },
  { id: '5', type: 'placeholder', text: 'Notifications' },
  { id: '6', type: 'placeholder', text: 'Notifications' },
  { id: '7', type: 'placeholder', text: 'Notifications' },
  { id: '8', type: 'placeholder', text: 'Notifications' },
  { id: '9', type: 'placeholder', text: 'Notifications' },
  { id: '10', type: 'placeholder', text: 'Notifications' },
];

const ArtistNotificationScreen = ({ navigation }) => {
  const renderNotificationItem = ({ item }) => {
    if (item.type === 'booking') {
      return (
        <View style={styles.notificationCard}>
          <View style={styles.cardContent}>
            <View style={styles.cardRow}>
              <Text style={styles.cardTitle}>Budget : ${item.budget}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <Text style={styles.cardTitle}>Genre : {item.genre}</Text>
            <View style={styles.starRating}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name={i < item.rating ? 'star' : 'star-o'}
                  size={16}
                  color={i < item.rating ? '#ffc107' : '#aaa'}
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.acceptButton}>
                <LinearGradient colors={['#28a745', '#218838']} style={styles.buttonGradient}>
                  <Text style={styles.buttonText}>Accept</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rejectButton}>
                <Text style={[styles.buttonText, styles.rejectButtonText]}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (item.type === 'guest_list') {
      return (
        <View style={styles.notificationCard}>
          <View style={styles.cardContent}>
            <View style={styles.cardRow}>
              <Text style={styles.cardTitle}>Guest List Request</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
            </View>
            <Text style={styles.cardTitle}>{item.user}</Text>
            <View style={styles.starRating}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name={i < item.rating ? 'star' : 'star-o'}
                  size={16}
                  color={i < item.rating ? '#ffc107' : '#aaa'}
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.addButton}
                onPress={() => navigation.navigate('ArtistFormBooking')}
              >
                <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.buttonGradient}>
                  <Text style={styles.buttonText}>Add</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rejectButton}>
                <Text style={[styles.buttonText, styles.rejectButtonText]}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (item.type === 'placeholder') {
      return (
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>{item.text}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} />{/* Spacer */}
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderNotificationItem}
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
  notificationCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  placeholderCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#aaa',
    fontSize: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDate: {
    fontSize: 12,
    color: '#aaa',
  },
  starRating: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  addButton: {
    flex: 1,
    height: 36,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 8,
  },
  acceptButton: {
    flex: 1,
    height: 36,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 8,
  },
  rejectButton: {
    flex: 1,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  rejectButtonText: {
    color: '#dc3545',
  }
});

export default ArtistNotificationScreen; 