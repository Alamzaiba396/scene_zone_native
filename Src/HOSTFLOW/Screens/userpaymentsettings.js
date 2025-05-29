import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { toggleFavorite, selectIsFavorite } from '../Redux/slices/favoritesSlice';

const UserPaymentSettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  
  // Get favorite status for each payment method
  const isGoogleFavorite = useSelector(state => selectIsFavorite(state, 'google'));
  const isAppleFavorite = useSelector(state => selectIsFavorite(state, 'apple'));
  const isVisaFavorite = useSelector(state => selectIsFavorite(state, 'visa'));
  const isMastercardFavorite = useSelector(state => selectIsFavorite(state, 'mastercard'));

  const handleFavoriteToggle = (paymentId) => {
    try {
      dispatch(toggleFavorite(paymentId));
      navigation.navigate('UserFavorite');
    } catch (error) {
      Alert.alert('Error', 'Failed to update favorite status');
      console.error('Error updating favorite:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Settings</Text>
        <View style={{ width: 24 }} />{/* Spacer to center the title */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Google Pay Item */}
        <TouchableOpacity style={styles.paymentMethodItem}>
          <View style={styles.paymentMethodIconContainer}>
             <Image 
               source={require('../assets/Images/Google.png')}
               style={{ width: 24, height: 24 }}
               resizeMode="contain"
             />
          </View>
          <View style={styles.paymentMethodDetails}>
            <Text style={styles.paymentMethodTitle}>Google Pay</Text>
            <Text style={styles.paymentMethodInfo}>f*************n@gmail.com</Text>
            <Text style={styles.paymentMethodBalance}>Balance: <Text style={{color: '#a95eff'}}>$1,234.00</Text></Text>
          </View>
          <TouchableOpacity 
            style={styles.heartIconPlaceholder}
            onPress={() => handleFavoriteToggle('google')}
          >
            <Ionicons 
              name={isGoogleFavorite ? "heart" : "heart-outline"} 
              size={24} 
              color={isGoogleFavorite ? "#ff4444" : "#555"} 
            />
          </TouchableOpacity>
          <MaterialIcons name="chevron-right" size={24} color="#555" />
        </TouchableOpacity>

        {/* Apple Pay Item */}
        <TouchableOpacity style={styles.paymentMethodItem}>
          <View style={styles.paymentMethodIconContainer}>
             <Image 
               source={require('../assets/Images/Apple.png')}
               style={{ width: 24, height: 24 }}
               resizeMode="contain"
             />
          </View>
          <View style={styles.paymentMethodDetails}>
            <Text style={styles.paymentMethodTitle}>Apple Pay</Text>
            <Text style={styles.paymentMethodInfo}>f*************n@gmail.com</Text>
            <Text style={styles.paymentMethodBalance}>Balance: <Text style={{color: '#a95eff'}}>$2,766.00</Text></Text>
          </View>
          <TouchableOpacity 
            style={styles.heartIconPlaceholder}
            onPress={() => handleFavoriteToggle('apple')}
          >
            <Ionicons 
              name={isAppleFavorite ? "heart" : "heart-outline"} 
              size={24} 
              color={isAppleFavorite ? "#ff4444" : "#555"} 
            />
          </TouchableOpacity>
          <MaterialIcons name="chevron-right" size={24} color="#555" />
        </TouchableOpacity>

        {/* Visa Card Item */}
        <TouchableOpacity style={styles.paymentMethodItem}>
          <View style={styles.paymentMethodIconContainer}>
             {/* Visa Icon Placeholder */}
          </View>
          <View style={styles.paymentMethodDetails}>
            <Text style={styles.paymentMethodTitle}>Visa</Text>
            <Text style={styles.paymentMethodInfo}>**** **** **** 1234</Text>
            <Text style={styles.paymentMethodBalance}>Balance: <Text style={{color: '#a95eff'}}>$1,876,766.00</Text></Text>
          </View>
          <TouchableOpacity 
            style={styles.heartIconPlaceholder}
            onPress={() => handleFavoriteToggle('visa')}
          >
            <Ionicons 
              name={isVisaFavorite ? "heart" : "heart-outline"} 
              size={24} 
              color={isVisaFavorite ? "#ff4444" : "#555"} 
            />
          </TouchableOpacity>
          <MaterialIcons name="chevron-right" size={24} color="#555" />
        </TouchableOpacity>

        {/* Master Card Item */}
        <TouchableOpacity style={styles.paymentMethodItem}>
          <View style={styles.paymentMethodIconContainer}>
             {/* Master Card Icon Placeholder */}
          </View>
          <View style={styles.paymentMethodDetails}>
            <Text style={styles.paymentMethodTitle}>Master Card</Text>
            <Text style={styles.paymentMethodInfo}>**** **** **** 1234</Text>
            <Text style={styles.paymentMethodBalance}>Balance: <Text style={{color: '#a95eff'}}>$2,876,766.00</Text></Text>
          </View>
          <TouchableOpacity 
            style={styles.heartIconPlaceholder}
            onPress={() => handleFavoriteToggle('mastercard')}
          >
            <Ionicons 
              name={isMastercardFavorite ? "heart" : "heart-outline"} 
              size={24} 
              color={isMastercardFavorite ? "#ff4444" : "#555"} 
            />
          </TouchableOpacity>
          <MaterialIcons name="chevron-right" size={24} color="#555" />
        </TouchableOpacity>

      </ScrollView>

       {/* Add Payment Method Button */}
      <TouchableOpacity style={styles.addPaymentButton} onPress={() => navigation.navigate('AddPaymentMethodScreen')}>
        <LinearGradient
          colors={['#B15CDE', '#7952FC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.addPaymentButtonText}>Add Payment Method</Text>
        </LinearGradient>
      </TouchableOpacity>
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
   scrollViewContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 100, // Add padding at the bottom for the button
  },
  paymentMethodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a', // Dark background
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  paymentMethodIconContainer: {
     width: 40,
     height: 40,
     justifyContent: 'center',
     alignItems: 'center',
     marginRight: 15,
  },
  paymentMethodIcon: {
      width: '100%%',
      height: '100%%',
  },
  paymentMethodDetails: {
    flex: 1,
  },
  paymentMethodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  paymentMethodInfo: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 2,
  },
   paymentMethodBalance: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 2,
  },
  addPaymentButton: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', // To make gradient respect border radius
  },
  gradientButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  addPaymentButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  heartIconPlaceholder: {
    padding: 8,
    marginRight: 8,
  },
});

export default UserPaymentSettingsScreen; 