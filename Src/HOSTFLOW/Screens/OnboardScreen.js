

import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Discover amazing events and book, artists, Cafes',
    subtitle: 'The best event we have prepared for you',
    image: require('../assets/Images/onboard1.png'),
  },
  {
    title: 'Experience The Ultimate Local Event Right',
    subtitle: 'The best event we have prepared for you',
    image: require('../assets/Images/onboard2.png'),
  },
  {
    title: 'Enjoy your experience seamlessly',
    subtitle: 'We make your time unforgettable',
    image: require('../assets/Images/onboard3.png'),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const scheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const handleNext = () => {
    if (step < slides.length - 1) {
      setStep(step + 1);
    }
  };

  const handleFinalButton = (type) => {
    if (type === 'continue as host') {
      navigation.navigate('Signup');
    } else if (type === 'continue as artist') {
      navigation.navigate('Artist');
    } else if (type === 'discover events') {
      navigation.navigate('Discover');
    }
  };

  return (
    <ImageBackground
      source={slides[step].image}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,1)']}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={[styles.content, { paddingBottom: insets.bottom + 20 }]}>
              <Text style={styles.title}>{slides[step].title}</Text>
              <Text style={styles.subtitle}>{slides[step].subtitle}</Text>

              <View style={styles.horizontalIndicator}>
                {[0, 1, 2].map((i) => (
                  <View
                    key={i}
                    style={[
                      styles.indicator,
                      {
                        backgroundColor: i <= step ? '#fff' : '#555',
                        flex: i <= step ? 2 : 1,
                      },
                    ]}
                  />
                ))}
              </View>

              {step < slides.length - 1 ? (
                <TouchableOpacity
                  style={styles.fixedButton}
                  activeOpacity={0.8}
                  onPress={handleNext}
                >
                  <LinearGradient
                    colors={['#a95eff', '#b33bf6']}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.buttonText}>
                      {step === 1 ? 'Get Started' : 'Next'}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              ) : (
                <View style={styles.buttonGroup}>
                  {['Continue as Host', 'Continue as Artist', 'Discover Events'].map(
                    (label, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.fixedButton}
                        onPress={() => handleFinalButton(label.toLowerCase())}
                        activeOpacity={0.8}
                      >
                        <LinearGradient
                          colors={['#a95eff', '#b33bf6']}
                          style={styles.buttonGradient}
                        >
                          <Text style={styles.buttonText}>{label}</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    )
                  )}
                </View>
              )}

              {/* <Text style={styles.signin}>
                Already have an account?{' '}
                <Text style={styles.signinBold}>Sign In</Text>
              </Text> */}
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width,
    height,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 30,
    color: '#ccc',
  },
  horizontalIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    height: 10,
  },
  indicator: {
    height: 4,
    marginHorizontal: 5,
    borderRadius: 2,
  },
  fixedButton: {
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 12,
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
    fontSize: 16,
    lineHeight: 22, // ✅ fixes iOS text clipping inside button
    textAlign: 'center',
  },
  buttonGroup: {
    marginBottom: 15,
  },
  signin: {
    textAlign: 'center',
    color: '#ccc',
    fontSize: 13,
    marginTop: 5,
  },
  signinBold: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default OnboardingScreen;
