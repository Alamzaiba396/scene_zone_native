import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './Src/HOSTFLOW/Screens/SplashScreen';
import OnboardScreen from './Src/HOSTFLOW/Screens/OnboardScreen';
import SignUpScreen from './Src/HOSTFLOW/Screens/SignupScreen';
import SigninScreen from './Src/HOSTFLOW/Screens/SigninScreen';
import OtpVerificationScreen from './Src/HOSTFLOW/Screens/OtpVerificationScreen';
import ForgotPasswordScreen from './Src/HOSTFLOW/Screens/ForgotPasswordScreen';
import CheckMailboxScreen from './Src/HOSTFLOW/Screens/CheckMailBoxScreen';
import CreateNewPasswordScreen from './Src/HOSTFLOW/Screens/CreateNewPasswordScreen';
import BottomTabNavigator from './Src/HOSTFLOW/Components/BottomTabNavigator';
import NotificationScreen from './Src/HOSTFLOW/Screens/NotificationScreen';
import ExploreEventScreen from './Src/HOSTFLOW/Screens/ExploreEventScreen';
import EventDashboardScreen from './Src/HOSTFLOW/Screens/EventDashboardScreen';
import NewEventScreen from './Src/HOSTFLOW/Screens/NewEventScreen';
import GuestListScreen from './Src/HOSTFLOW/Screens/GuestListScreen';
import ShortListScreen from './Src/HOSTFLOW/Screens/ShortListScreen';
import ProfileScreen from './Src/HOSTFLOW/Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
           <Stack.Screen name="Onboard1" component={OnboardScreen} />
           <Stack.Screen name="Signup" component={SignUpScreen} />
              <Stack.Screen name="SignIn" component={SigninScreen} />
               <Stack.Screen name="OtpVerify" component={OtpVerificationScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="CheckMailBox" component={CheckMailboxScreen} />
                  <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
                    <Stack.Screen name="Home" component={BottomTabNavigator} />   
                      <Stack.Screen name="Notification" component={NotificationScreen} />   
                      <Stack.Screen name="Explore" component={ExploreEventScreen} />   
                        <Stack.Screen name="Event" component={EventDashboardScreen} />   
                          <Stack.Screen name="NewEvent" component={NewEventScreen} />   
                            <Stack.Screen name="GuestList" component={GuestListScreen} />   
                          <Stack.Screen name="ShortList" component={ShortListScreen} />   
                        <Stack.Screen name="Profile" component={ProfileScreen} />   
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
