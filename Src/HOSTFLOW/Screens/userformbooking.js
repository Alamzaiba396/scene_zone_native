import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather'; // For the ticket icon
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const UserFormBookingScreen = ({ navigation, route }) => {
  const [numberOfTickets, setNumberOfTickets] = useState('1');
  const [selectedGuestType, setSelectedGuestType] = useState('level2'); // Default selected

  // Get event details from navigation parameters
  const { eventDetails } = route.params || {};

  const handleContinueBooking = () => {
    // Implement booking logic here
    console.log('Continue booking with:', numberOfTickets, selectedGuestType);
    // Navigate to the next screen, e.g., payment or summary
    navigation.navigate('UserDetailBookingScreen', { numberOfTickets, selectedGuestType, eventDetails });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Ticket</Text>
        <View style={{ width: 24 }} /> {/* Spacer to center title */}
      </View>

      <ScrollView>
        {/* Event Details Card */}
        <View style={styles.eventCard}>
          <Image
            source={eventDetails.image}
            style={styles.eventImage}
            resizeMode="cover"
          />
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>{eventDetails.title}</Text>
            {eventDetails.price && (
               <Text style={styles.eventPriceRange}>{eventDetails.price}</Text>
            )}
            <Text style={styles.eventLocation}>{eventDetails.location}</Text>
          </View>
        </View>

        {/* Number of Tickets */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Number of tickets</Text>
          <View style={styles.ticketInputContainer}>
             <Icon name="book" size={20} color="#fff" style={styles.ticketIcon} />
            <TextInput
              style={styles.ticketInput}
              keyboardType="number-pad"
              value={numberOfTickets}
              onChangeText={setNumberOfTickets}
              placeholder="1"
              placeholderTextColor="#888"
            />
             {/* You might add stepper buttons here later */}
          </View>
        </View>

        {/* Guest Type */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Guest Type:</Text>
          {/* Guest Type Options */}
          <TouchableOpacity
            style={[styles.guestTypeCard, selectedGuestType === 'level2' && styles.guestTypeCardSelected]}
            onPress={() => setSelectedGuestType('level2')}
          >
             <LinearGradient
                colors={selectedGuestType === 'level2' ? ['#B15CDE', '#7952FC'] : ['#1a1a1a', '1a1a1a']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.guestTypeGradient}
              />
            <View style={styles.guestTypeContent}>
                <Image
                    source={require('../assets/Images/ticket.png')} // Placeholder icon
                    style={styles.guestTypeIcon}
                    resizeMode="contain"
                />
              <View style={styles.guestTypeTextContainer}>
                <Text style={styles.guestTypeTitle}>Level 2</Text>
                <Text style={styles.guestTypeSubtitle}>Discout + $1.50 Fee</Text>
                <Text style={styles.guestTypeStatus}>Accepted</Text>
              </View>
              {selectedGuestType === 'level2' && (
                <Ionicons name="checkmark-circle" size={24} color="#fff" style={styles.checkmarkIcon} />
              )}
            </View>
          </TouchableOpacity>
          {/* Add other guest types here */}
        </View>
      </ScrollView>

      {/* Continue Button */}
      <LinearGradient
        colors={['#B15CDE', '#7952FC']} // Purple gradient colors
        start={{ x: 0, y: 0 }} // Start gradient at top-left
        end={{ x: 1, y: 1 }} // End gradient at bottom-right
        style={styles.continueButtonGradient}
      >
        <TouchableOpacity style={styles.continueButton} onPress={handleContinueBooking}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
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
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    margin: 16,
    overflow: 'hidden',
  },
  eventImage: {
    width: 100,
    height: 100,
  },
  eventInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  eventPriceRange: {
    fontSize: 14,
    color: '#a95eff',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    color: '#aaa',
  },
  sectionContainer: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  ticketInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  ticketIcon:{
    marginRight:10
  },
  ticketInput: {
    flex: 1,
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  guestTypeCard: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    position: 'relative',
     borderWidth: 1,
    borderColor: '#333', // Default border color
  },
  guestTypeCardSelected: {
    borderColor: '#a95eff', // Purple border when selected
  },
  guestTypeGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7, // Adjust opacity of the gradient background
  },
  guestTypeContent: {
     flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    zIndex: 1, // Ensure content is above gradient
  },
  guestTypeIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  guestTypeTextContainer: {
    flex: 1,
  },
  guestTypeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  guestTypeSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 2,
  },
  guestTypeStatus: {
    fontSize: 14,
    color: '#a95eff',
  },
   checkmarkIcon: {
    marginLeft: 10,
  },
  continueButtonGradient: {
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  continueButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default UserFormBookingScreen; 