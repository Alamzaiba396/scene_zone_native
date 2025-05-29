import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './Src/HOSTFLOW/Redux/store';
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
import ArtistSignupScreen from './Src/HOSTFLOW/Screens/ArtistSignupScreen';
import ArtistSigninScreen from './Src/HOSTFLOW/Screens/ArtistSigninScreen';
import ArtistOtpVerificationScreen from './Src/HOSTFLOW/Screens/ArtistOtpVerificationScreen';
import CreateProfile from './Src/HOSTFLOW/Screens/CreateProfile';
import ArtistHomeScreen from './Src/HOSTFLOW/Screens/ArtistHomeScreen';
import ArtistNotificationScreen from './Src/HOSTFLOW/Screens/ArtistNotificationScreen';
import ArtistAppliedScreen from './Src/HOSTFLOW/Screens/ArtistAppliedScreen';
import ArtistFormBookingScreen from './Src/HOSTFLOW/Screens/artistformbooking';
import ArtistInboxScreen from './Src/HOSTFLOW/Screens/artistinbox';
import ChatScreen from './Src/HOSTFLOW/Screens/chat';
import ArtistProfileScreen from './Src/HOSTFLOW/Screens/artistprofile';
import ArtistEditProfileScreen from './Src/HOSTFLOW/Screens/artisteditprofile';
import ArtistGuestListScreen from './Src/HOSTFLOW/Screens/artistguestlist';
import ArtistPaymentSettingsScreen from './Src/HOSTFLOW/Screens/artistpaymentsettings';
import ArtistGeneralSettingsScreen from './Src/HOSTFLOW/Screens/artistgeneralsettings';
import ArtistHelpCentreScreen from './Src/HOSTFLOW/Screens/artisthelpcentre';
import UserSignupScreen from './Src/HOSTFLOW/Screens/usersignup';
import UserSigninScreen from './Src/HOSTFLOW/Screens/usersignin';
import UserCreateProfileScreen from './Src/HOSTFLOW/Screens/usercreateprofile';
import UserOtpVerificationScreen from './Src/HOSTFLOW/Screens/userotpverification';
import UserForgotPasswordScreen from './Src/HOSTFLOW/Screens/userforgotpassword';
import UserOtpResetScreen from './Src/HOSTFLOW/Screens/userotpreset';
import UserHomeScreen from './Src/HOSTFLOW/Screens/userhomescreen';
import UserNotificationScreen from './Src/HOSTFLOW/Screens/usernotification';
import UserProfileScreen from './Src/HOSTFLOW/Screens/userprofile';
import UserEditProfileScreen from './Src/HOSTFLOW/Screens/usereditprofile';
import UserAccountSecurityScreen from './Src/HOSTFLOW/Screens/useraccountsecurity';
import UserPaymentSettingsScreen from './Src/HOSTFLOW/Screens/userpaymentsettings';
import AddPaymentMethodScreen from './Src/HOSTFLOW/Screens/addpaymentmethod';
import UserGeneralSettingsScreen from './Src/HOSTFLOW/Screens/usergeneralsettings';
import UserHelpCentreScreen from './Src/HOSTFLOW/Screens/userhelpcentre';
import UserFavoriteScreen from './Src/HOSTFLOW/Screens/userfavorite';
import UserVenueBookingScreen from './Src/HOSTFLOW/Screens/userVenueBooking';
import UserTicketScreen from './Src/HOSTFLOW/Screens/userticket';
import UserEvent from './Src/HOSTFLOW/Screens/UserEvent';
import UserFormBookingScreen from './Src/HOSTFLOW/Screens/userformbooking';
import UserDetailBookingScreen from './Src/HOSTFLOW/Screens/userdetailbooking';
import UserBookingPaymentScreen from './Src/HOSTFLOW/Screens/userBookingPayment';
import UserConfirmBookingScreen from './Src/HOSTFLOW/Screens/userconfirmbooking';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
             <Stack.Screen name="Onboard1" component={OnboardScreen} />
             <Stack.Screen name="Signup" component={SignUpScreen} />
             <Stack.Screen name="ArtistSignup" component={ArtistSignupScreen} />
                <Stack.Screen name="SignIn" component={SigninScreen} />
                <Stack.Screen name="ArtistSigninScreen" component={ArtistSigninScreen} />
                 <Stack.Screen name="OtpVerify" component={OtpVerificationScreen} />
                 <Stack.Screen name="ArtistOtpVerificationScreen" component={ArtistOtpVerificationScreen} />
                 <Stack.Screen name="UserOtpVerification" component={UserOtpVerificationScreen} />
                  <Stack.Screen name="ForgotPassword" component={UserForgotPasswordScreen} />
                  <Stack.Screen name="CreateProfile" component={CreateProfile} />
                   <Stack.Screen name="ArtistHome" component={ArtistHomeScreen} />
                  <Stack.Screen name="ArtistNotification" component={ArtistNotificationScreen} />
                  <Stack.Screen name="ArtistApplied" component={ArtistAppliedScreen} />
                  <Stack.Screen name="ArtistFormBooking" component={ArtistFormBookingScreen} />
                  <Stack.Screen name="ArtistInbox" component={ArtistInboxScreen} />
                  <Stack.Screen name="Chat" component={ChatScreen} />
                  <Stack.Screen name="ArtistProfile" component={ArtistProfileScreen} />
                  <Stack.Screen name="ArtistEditProfile" component={ArtistEditProfileScreen} />
                  <Stack.Screen name="ArtistGuestList" component={ArtistGuestListScreen} />
                  <Stack.Screen name="ArtistPaymentSettings" component={ArtistPaymentSettingsScreen} />
                  <Stack.Screen name="ArtistGeneralSettings" component={ArtistGeneralSettingsScreen} />
                  <Stack.Screen name="ArtistHelpCentre" component={ArtistHelpCentreScreen} />
                  <Stack.Screen name="UserSignup" component={UserSignupScreen} />
                  <Stack.Screen name="UserSignin" component={UserSigninScreen} />
                  <Stack.Screen name="UserCreateProfile" component={UserCreateProfileScreen} />
                  <Stack.Screen name="CheckMailBox" component={CheckMailboxScreen} />
                    <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
                    <Stack.Screen name="UserOtpReset" component={UserOtpResetScreen} />
                    <Stack.Screen name="UserHome" component={UserHomeScreen} />
                      <Stack.Screen name="Home" component={BottomTabNavigator} />   
                        <Stack.Screen name="Notification" component={NotificationScreen} />   
                        <Stack.Screen name="Explore" component={ExploreEventScreen} />   
                          <Stack.Screen name="Event" component={EventDashboardScreen} />   
                            <Stack.Screen name="NewEvent" component={NewEventScreen} />   
                              <Stack.Screen name="GuestList" component={GuestListScreen} />   
                        <Stack.Screen name="ShortList" component={ShortListScreen} />   
                          <Stack.Screen name="Profile" component={ProfileScreen} />   
                           <Stack.Screen name="UserNotificationScreen" component={UserNotificationScreen} />
                           <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
                           <Stack.Screen name="UserEditProfileScreen" component={UserEditProfileScreen} />
                           <Stack.Screen name="UserAccountSecurityScreen" component={UserAccountSecurityScreen} />
                           <Stack.Screen name="UserPaymentSettingsScreen" component={UserPaymentSettingsScreen} />
                           <Stack.Screen name="AddPaymentMethodScreen" component={AddPaymentMethodScreen} />
                           <Stack.Screen name="UserGeneralSettingsScreen" component={UserGeneralSettingsScreen} />
                           <Stack.Screen name="UserHelpCentreScreen" component={UserHelpCentreScreen} />
                           <Stack.Screen name="UserFavoriteScreen" component={UserFavoriteScreen} />
                           <Stack.Screen name="UserVenueBookingScreen" component={UserVenueBookingScreen} />
                           <Stack.Screen name="UserTicketScreen" component={UserTicketScreen} />
                           <Stack.Screen name="UserEvent" component={ UserAccountSecurityScreen} />
                           <Stack.Screen name="UserFormBookingScreen" component={UserFormBookingScreen} />
                           <Stack.Screen name="UserDetailBookingScreen" component={UserDetailBookingScreen} />
                           <Stack.Screen name="UserBookingPaymentScreen" component={UserBookingPaymentScreen} />
                           <Stack.Screen name="UserConfirmBookingScreen" component={UserConfirmBookingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
