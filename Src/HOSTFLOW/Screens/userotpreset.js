import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // For back arrow
import Ionicons from 'react-native-vector-icons/Ionicons'; // For central icon
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const UserOtpResetScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input field if a digit is entered
    if (text !== '' && index < otp.length - 1) {
      inputRefs[index + 1].current.focus();
    }
     // Move to the previous input field if backspace is pressed and the current field is empty
    if (text === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleResendOTP = () => {
    // Handle resend OTP logic
    console.log('Resend OTP pressed');
  };

  const handleConfirm = () => {
    // Handle confirm OTP logic
    const enteredOtp = otp.join('');
    console.log('Confirm OTP pressed:', enteredOtp);
    // Navigate to Create New Password screen
     navigation.navigate('CreateNewPassword'); // Assuming 'CreateNewPassword' is the next screen route name
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentArea}>
          {/* Central Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="mail-open-outline" size={50} color="#a95eff" />
          </View>

          <Text style={styles.title}>Check Your Mailbox</Text>
          <Text style={styles.description}>
            Please enter the 4 digit OTP code that we sent to your
            email (f**************n@gmail.com){/* Placeholder email */}
          </Text>

          {/* OTP Input Fields */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleOtpChange(text, index)}
                value={digit}
                ref={inputRefs[index]}
                textAlign={'center'}
                selectionColor={'#a95eff'}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Buttons at bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
           <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.resendButtonGradient}>
             <Text style={styles.resendButtonText}>Resend OTP</Text>
           </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
          <Text style={styles.confirmButtonTextBorder}>Confirm</Text>
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
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 160, // Add padding at the bottom to prevent buttons from covering content
  },
  header: {
    paddingTop: 20,
  },
  contentArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  iconContainer: {
    backgroundColor: '#1a1a1a', // Dark background for icon
    borderRadius: 20, // Rounded corners for icon container
    padding: 15,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#a95eff', // Border color for selected input or default
    borderRadius: 10,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#000', // Match background color
  },
  resendButton: {
    width: '100%',
    borderRadius: 30, // Pill shape
    overflow: 'hidden',
    marginBottom: 12,
  },
  resendButtonGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmButton: {
    width: '100%',
    borderRadius: 30, // Pill shape
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#a95eff', // Border color
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonTextBorder: {
    color: '#fff', // Text color for bordered button
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserOtpResetScreen; 