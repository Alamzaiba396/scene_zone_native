import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  StatusBar,
  useColorScheme,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const SplashScreen = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation(); // Access navigation object

  const backgroundColor =
    colorScheme === 'dark' ? '#100218' : '#ffffff'; 

  useEffect(() => {
    // Navigate to OnboardScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Onboard1'); // Replace SplashScreen with OnboardScreen
    }, 3000);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <Image
          source={require('../assets/Images/SplashLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
  },
});

export default SplashScreen;