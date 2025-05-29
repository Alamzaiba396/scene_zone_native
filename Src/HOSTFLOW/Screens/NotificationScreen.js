import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

      {/* Notification Card */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.notificationCard}>
          <View style={styles.row}>
            <Image
              source={require('../assets/Images/swiper.png')} // ✅ replace with your actual image
              style={styles.image}
            />
            <View style={styles.info}>
              <Text style={styles.budget}>Budget: $500</Text>
              <Text style={styles.genre}>
                Genre : <Text style={styles.bold}>Rock</Text>
              </Text>
              <View style={styles.stars}>
                {[...Array(5)].map((_, index) => (
                  <Icon key={index} name="star" size={14} color="#FFD700" />
                ))}
              </View>
            </View>
            <Text style={styles.date}>06 Feb 2025</Text>
          </View>

          <TouchableOpacity style={styles.acceptedButton}>
            <Text style={styles.acceptedText}>Accepted</Text>
            <Icon name="check-circle" size={16} color="#fff" style={{ marginLeft: 6 }} />
          </TouchableOpacity>
        </View>

        {/* Dummy Notification Items */}
        {[...Array(10)].map((_, i) => (
          <View key={i} style={styles.notificationItem}>
            <Text style={styles.notificationText}>Notifications</Text>
          </View>
        ))}
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
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  notificationCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  budget: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 2,
  },
  genre: {
    color: '#fff',
    fontSize: 13,
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  stars: {
    flexDirection: 'row',
    marginTop: 6,
  },
  date: {
    color: '#ccc',
    fontSize: 11,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  acceptedButton: {
    marginTop: 10,
    backgroundColor: '#2ecc71',
    borderRadius: 6,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptedText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  notificationItem: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationText: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default NotificationScreen;
