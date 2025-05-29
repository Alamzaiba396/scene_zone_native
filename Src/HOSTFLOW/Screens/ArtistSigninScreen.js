import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const ArtistSignInScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const scheme = useColorScheme();
  const isDark = true; // force dark mode

  const background = '#000';
  const cardBg = '#1a1a1a';
  const text = '#fff';
  const border = '#333';
  const placeholder = '#aaa';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <ScrollView contentContainerStyle={styles.inner}>
        <Text style={[styles.title, { color: text }]}>
          Sign in to {'\n'}your account
        </Text>

        <Text style={[styles.subtitle, { color: placeholder }]}>
          Don't have an account?{' '}
          <Text style={styles.signup} onPress={() => navigation.navigate('ArtistSignup')}>
            Sign Up
          </Text>
        </Text>

        {/* Phone Input */}
        <View style={[styles.inputContainer, { backgroundColor: cardBg, borderColor: border }]}>
          <Icon name="mobile" size={20} color={placeholder} style={styles.inputIcon} />
          <TextInput
            placeholder="+91 412-123-4215"
            placeholderTextColor={placeholder}
            style={[styles.input, { color: text }]}
            keyboardType="phone-pad"
          />
        </View>

        {/* Password Input */}
        <View style={[styles.inputContainer, { backgroundColor: cardBg, borderColor: border }]}>
          <Feather name="lock" size={20} color={placeholder} style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={placeholder}
            secureTextEntry={!passwordVisible}
            style={[styles.input, { color: text, flex: 1 }]}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Feather name={passwordVisible ? 'eye' : 'eye-off'} size={20} color={placeholder} />
          </TouchableOpacity>
        </View>

        {/* Remember / Forgot Row */}
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Icon name="check-square-o" size={16} color="#a95eff" />
            <Text style={[styles.rememberText, { color: text }]}> Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity onPress={() => navigation.navigate('ArtistOtpVerificationScreen')} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={[styles.orText, { color: placeholder }]}>or sign in with</Text>

        {/* Google Sign In */}
        <TouchableOpacity style={[styles.socialButton, styles.whiteBorder]}>
          <View style={styles.socialRow}>
            <Icon name="google" size={20} color="#fff" />
            <Text style={styles.socialButtonText}> Sign in with Google</Text>
          </View>
        </TouchableOpacity>

        {/* Apple Sign In */}
        <TouchableOpacity style={[styles.socialButton, styles.whiteBorder]}>
          <View style={styles.socialRow}>
            <Icon name="apple" size={20} color="#fff" />
            <Text style={styles.socialButtonText}> Sign in with Apple</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { padding: 14,marginTop:60 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 28 },
  subtitle: { fontSize: 14, marginBottom: 20 },
  signup: { color: '#a95eff', fontWeight: '600' },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 16,
  },
  inputIcon: { marginRight: 8 },
  input: {
    fontSize: 16,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 14,
  },
  forgot: {
    color: '#a95eff',
    fontSize: 14,
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#a95eff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  socialButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  whiteBorder: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#000',
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default ArtistSignInScreen; 