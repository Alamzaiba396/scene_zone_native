import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const UserDetailBookingScreen = ({ navigation, route }) => {
  // Get booking details from navigation parameters
  const { numberOfTickets, selectedGuestType, eventDetails } = route.params || {};

  // Placeholder data for display (replace with actual calculated values)
  const subtotal = 50.00; // Example value
  const platformFees = 1.50; // Example value
  const taxRate = 0.04; // 4%
  const taxAmount = subtotal * taxRate; // Example calculation
  const totalAmount = subtotal + platformFees + taxAmount; // Example calculation

  // Placeholder ticket ID (replace with generated ID)
  const ticketId = '#8954673009';

  // Placeholder user details (replace with actual user data)
  const userName = 'Franklin Clinton';

  const handleConfirmBooking = () => {
    // Implement booking confirmation logic here
    console.log('Confirming booking');
    // Navigate to the next screen, e.g., payment processing or confirmation
    navigation.navigate('UserBookingPaymentScreen', { bookingDetails: { numberOfTickets, selectedGuestType, eventDetails, totalAmount, ticketId } }); // Navigate to payment screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Payment</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      <ScrollView>
        {/* Event Image and Date */}
        <View style={styles.eventImageContainer}>
          <Image
            source={eventDetails?.image || require('../assets/Images/fff.jpg')} // Use passed image or a default
            style={styles.eventImage}
            resizeMode="cover"
          />
          {/* Date Overlay */}
          <View style={styles.dateOverlay}>
            <Text style={styles.dateMonth}>May</Text>
            <Text style={styles.dateDay}>20</Text>
          </View>
        </View>

        {/* Event Title and Ticket ID */}
        <View style={styles.eventInfoContainer}>
          <Text style={styles.eventTitle}>{eventDetails?.title || 'Event Title'}</Text>
          <Text style={styles.ticketId}>Ticket ID: {ticketId}</Text>
        </View>

        {/* Booking Details Card */}
        <View style={styles.detailCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name</Text>
            <Text style={styles.detailValue}>{userName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Detail Location</Text>
            <Text style={styles.detailValue}>{eventDetails?.location || 'Location'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Number of Ticket</Text>
            <Text style={styles.detailValue}>x{numberOfTickets || '1'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>May 20, 2024</Text>
          </View>
        </View>

        {/* Payment Breakdown Card */}
        <View style={styles.detailCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Subtotal</Text>
            <Text style={styles.detailValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Platform Fees</Text>
            <Text style={styles.detailValue}>${platformFees.toFixed(2)}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Tax ({taxRate * 100}%)</Text>
            <Text style={styles.detailValue}>${taxAmount.toFixed(2)}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Total</Text>
            <Text style={[styles.detailValue, styles.totalAmountText]}>${totalAmount.toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Confirm Booking Button */}
      <LinearGradient
        colors={['#B15CDE', '#7952FC']} // Purple gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.confirmButtonGradient}
      >
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmBooking}>
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
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
  eventImageContainer: {
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  dateOverlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  dateMonth: {
    fontSize: 12,
    color: '#fff',
  },
  dateDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventInfoContainer: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a95eff', // Purple color
    marginBottom: 4,
  },
  ticketId: {
    fontSize: 14,
    color: '#aaa',
  },
  detailCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 10,
  },
  totalAmountText: {
    fontSize: 16,
    color: '#a95eff', // Purple color for total
  },
  confirmButtonGradient: {
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  confirmButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default UserDetailBookingScreen; 