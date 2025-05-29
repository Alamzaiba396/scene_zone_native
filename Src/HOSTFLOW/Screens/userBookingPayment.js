import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const UserBookingPaymentScreen = ({ navigation, route }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('googlepay'); // Default selected

  // Get booking details from navigation parameters (optional for this screen's UI)
  const { bookingDetails } = route.params || {};

  const handleConfirmPayment = () => {
    // Implement payment confirmation logic here
    console.log('Confirming payment with:', selectedPaymentMethod);
    // Navigate to the next screen, e.g., payment processing or confirmation
    navigation.navigate('UserConfirmBookingScreen'); // Navigate to the confirmation screen
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      <ScrollView style={styles.paymentMethodsContainer}>
        {/* Google Pay */}
        <TouchableOpacity
          style={[styles.paymentMethodCard, selectedPaymentMethod === 'googlepay' && styles.paymentMethodCardSelected]}
          onPress={() => setSelectedPaymentMethod('googlepay')}
        >
          <LinearGradient
            colors={selectedPaymentMethod === 'googlepay' ? ['#B15CDE', '#7952FC'] : ['#1a1a1a', '#1a1a1a']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentMethodGradient}
          />
          <View style={styles.paymentMethodContent}>
            <Image
              source={require('../assets/Images/Google.png')}
              style={styles.paymentIcon}
              resizeMode="contain"
            />
            <View style={styles.paymentDetails}>
              <Text style={styles.paymentMethodTitle}>Google Pay</Text>
              <Text style={styles.paymentMethodInfo}>f************n@gmail.com</Text>
              <Text style={styles.paymentMethodBalance}>Balance: $1,234.00</Text>
            </View>
            {selectedPaymentMethod === 'googlepay' && (
              <Ionicons name="checkmark-circle" size={24} color="#fff" style={styles.checkmarkIcon} />
            )}
          </View>
        </TouchableOpacity>

        {/* Apple Pay */}
        <TouchableOpacity
          style={[styles.paymentMethodCard, selectedPaymentMethod === 'applepay' && styles.paymentMethodCardSelected]}
          onPress={() => setSelectedPaymentMethod('applepay')}
        >
           <LinearGradient
            colors={selectedPaymentMethod === 'applepay' ? ['#B15CDE', '#7952FC'] : ['#1a1a1a', '#1a1a1a']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentMethodGradient}
          />
          <View style={styles.paymentMethodContent}>
            <Image
              source={require('../assets/Images/Apple.png')}
              style={styles.paymentIcon}
              resizeMode="contain"
            />
            <View style={styles.paymentDetails}>
              <Text style={styles.paymentMethodTitle}>Apple Pay</Text>
              <Text style={styles.paymentMethodInfo}>f************n@gmail.com</Text>
              <Text style={styles.paymentMethodBalance}>Balance: $2,766.00</Text>
            </View>
             {selectedPaymentMethod === 'applepay' && (
              <Ionicons name="checkmark-circle" size={24} color="#fff" style={styles.checkmarkIcon} />
            )}
          </View>
        </TouchableOpacity>

        {/* Visa */}
        <TouchableOpacity
          style={[styles.paymentMethodCard, selectedPaymentMethod === 'visa' && styles.paymentMethodCardSelected]}
          onPress={() => setSelectedPaymentMethod('visa')}
        >
           <LinearGradient
            colors={selectedPaymentMethod === 'visa' ? ['#B15CDE', '#7952FC'] : ['#1a1a1a', '#1a1a1a']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentMethodGradient}
          />
          <View style={styles.paymentMethodContent}>
            <Image
              source={require('../assets/Images/Icon.png')} // Assuming a Visa icon exists
              style={styles.paymentIcon}
              resizeMode="contain"
            />
            <View style={styles.paymentDetails}>
              <Text style={styles.paymentMethodTitle}>Visa</Text>
              <Text style={styles.paymentMethodInfo}>**** **** **** 1234</Text>
              <Text style={styles.paymentMethodBalance}>Balance: $1,876,766.00</Text>
            </View>
             {selectedPaymentMethod === 'visa' && (
              <Ionicons name="checkmark-circle" size={24} color="#fff" style={styles.checkmarkIcon} />
            )}
          </View>
        </TouchableOpacity>

        {/* Master Card */}
        <TouchableOpacity
          style={[styles.paymentMethodCard, selectedPaymentMethod === 'mastercard' && styles.paymentMethodCardSelected]}
          onPress={() => setSelectedPaymentMethod('mastercard')}
        >
           <LinearGradient
            colors={selectedPaymentMethod === 'mastercard' ? ['#B15CDE', '#7952FC'] : ['#1a1a1a', '#1a1a1a']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.paymentMethodGradient}
          />
          <View style={styles.paymentMethodContent}>
            <Image
              source={require('../assets/Images/Icon.png')} // Using Icon.png for Mastercard as requested
              style={styles.paymentIcon}
              resizeMode="contain"
            />
            <View style={styles.paymentDetails}>
              <Text style={styles.paymentMethodTitle}>Master Card</Text>
              <Text style={styles.paymentMethodInfo}>**** **** **** 1234</Text>
              <Text style={styles.paymentMethodBalance}>Balance: $2,876,766.00</Text>
            </View>
            {selectedPaymentMethod === 'mastercard' && (
              <Ionicons name="checkmark-circle" size={24} color="#fff" style={styles.checkmarkIcon} />
            )}
          </View>
        </TouchableOpacity>

      </ScrollView>

      {/* Confirm Payment Button */}
      <LinearGradient
        colors={['#B15CDE', '#7952FC']} // Purple gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.confirmButtonGradient}
      >
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
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
  paymentMethodsContainer: {
    flex: 1,
    padding: 16,
  },
  paymentMethodCard: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#333', // Default border color
  },
  paymentMethodCardSelected: {
    borderColor: '#a95eff', // Purple border when selected
  },
  paymentMethodGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7, // Adjust opacity
  },
  paymentMethodContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    zIndex: 1, // Ensure content is above gradient
  },
  paymentIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  paymentDetails: {
    flex: 1,
  },
  paymentMethodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  paymentMethodInfo: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 2,
  },
  paymentMethodBalance: {
    fontSize: 14,
    color: '#a95eff', // Purple color for balance
  },
  checkmarkIcon: {
    marginLeft: 10,
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

export default UserBookingPaymentScreen; 