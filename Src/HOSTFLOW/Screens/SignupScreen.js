import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  Dimensions,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppleLogo from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

const SignUpScreen = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={[styles.header, { color: '#fff' }]}>
          Create new{'\n'}account
        </Text>

        <Text style={styles.signinText}>
          Already have an account?{' '}
          <Text style={styles.signinLink} onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>

        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={[styles.input, { color: '#fff' }]}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="call-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={[styles.input, { color: '#fff' }]}
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="location-on" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={[styles.input, { color: '#fff' }]}
            placeholder="Location"
            placeholderTextColor="#aaa"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={[styles.input, { color: '#fff' }]}
            placeholder="Create Password"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#aaa" />
          </TouchableOpacity>
        </View>

        <View style={styles.rememberMeRow}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            thumbColor={rememberMe ? '#8A2BE2' : '#888'}
          />
          <Text style={{ color: '#fff' }}> Remember me</Text>
        </View>

        <TouchableOpacity onPress={handleSignUp}>
          <LinearGradient colors={['#8A2BE2', '#E040FB']} style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={[styles.orText, { color: '#ccc' }]}>or sign up with</Text>

      <TouchableOpacity style={styles.socialButton}>
  <FontAwesome name="google" size={20} color="#fff" />
  <Text style={styles.socialButtonText}>Sign up with Google</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.socialButton}>
  <AppleLogo name="apple1" size={20} color="#fff" />
  <Text style={styles.socialButtonText}>Sign up with Apple</Text>
</TouchableOpacity>


        <Text style={[styles.termsText, { color: '#aaa' }]}>
          By clicking "Sign Up" you agree to Recognotes{' '}
          <Text style={styles.linkText}>Term of Use</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  inner: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signinText: {
    color: '#aaa',
    marginBottom: 20,
  },
  signinLink: {
    color: '#A020F0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 48,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
  rememberMeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButton: {
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  socialButtonText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 14,
    color: '#fff', // ✅ fixed: now visible on black background
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#A020F0',
  },
});

export default SignUpScreen;
