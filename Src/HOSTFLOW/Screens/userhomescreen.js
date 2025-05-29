import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectIsFavorite } from '../Redux/slices/favoritesSlice';

const { width } = Dimensions.get('window');

// Calculate the width for each category item
// const categoryItemWidth = width / 6; // 6 categories

const userData = {
  name: "Name Placeholder",
  email: "email@example.com",
  image: require('../assets/Images/frame1.png'), // or { uri: 'https://via.placeholder.com/100' }
};

const UserHomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  
  // Event IDs for each event in the home screen
  const eventIds = {
    featured: 'featured_event_1',
    upcoming1: 'upcoming_event_1',
    upcoming2: 'upcoming_event_2',
    upcoming3: 'upcoming_event_3',
    upcoming4: 'upcoming_event_4',
    upcoming5: 'upcoming_event_5'
  };

  // Get favorite status for each event
  const isFeaturedFavorite = useSelector(state => selectIsFavorite(state, eventIds.featured));
  const isUpcoming1Favorite = useSelector(state => selectIsFavorite(state, eventIds.upcoming1));
  const isUpcoming2Favorite = useSelector(state => selectIsFavorite(state, eventIds.upcoming2));
  const isUpcoming3Favorite = useSelector(state => selectIsFavorite(state, eventIds.upcoming3));
  const isUpcoming4Favorite = useSelector(state => selectIsFavorite(state, eventIds.upcoming4));
  const isUpcoming5Favorite = useSelector(state => selectIsFavorite(state, eventIds.upcoming5));

  const handleFavoriteToggle = (eventId) => {
    try {
      dispatch(toggleFavorite(eventId));
      navigation.navigate('UserFavoriteScreen');
    } catch (error) {
      console.error('Error updating favorite:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentArea}>
        {/* Header */}
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.greeting}>Hello Brandon!</Text>
            <View style={styles.locationContainer}>
              <MaterialIcons name="location-on" size={16} color="#a95eff" />
              <Text style={styles.locationText}>H-70, Sector 63, Noida</Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Icon name="search" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserNotificationScreen')}>
              <Icon name="bell" size={24} color="#fff" />
              {/* Notification dot placeholder */}
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Events Section (Horizontal Scroll) */}
        <LinearGradient
          colors={['#000000', '#B15CDE']} // Start dark and fade to purplish
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientBackground}
        >
          {/* Scene Logo and Rabbit GIF */}
          <View style={styles.sceneLogoContainer}>
            <Image
              source={require('../assets/Images/rabb.gif')}
              style={styles.rabbitGif}
              resizeMode="contain"
            />
            {/* Scene Logo */}
            <Image
              source={require('../assets/Images/scene.png')}
              style={styles.sceneLogo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}></Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalEventList}>
              {/* Example Event Card 1 (using eventCardContainer structure) */}
              <View style={styles.eventCardContainerHorizontalScroll}>
                {/* Purple Gradient Background */}
                <LinearGradient
                  colors={['#B15CDE', '#7952FC']} // Purple gradient colors from image
                  start={{ x: 0, y: 0 }} // Start gradient at top-left
                  end={{ x: 1, y: 1 }} // End gradient at bottom-right
                  style={styles.eventCardGradientBackground}
                />
                {/* Large Event Image Card Content */}
                <View style={styles.eventCardContent}>
                  <Image
                    source={require('../assets/Images/fff.jpg')} // Placeholder image
                    style={styles.eventImage}
                    resizeMode="cover"
                  />
                  <View style={styles.imageOverlay} />
                  <TouchableOpacity 
                    style={styles.heartIconPlaceholder}
                    onPress={() => handleFavoriteToggle(eventIds.featured)}
                  >
                    <Ionicons 
                      name={isFeaturedFavorite ? "heart" : "heart-outline"} 
                      size={26} 
                      color={isFeaturedFavorite ? "#ff4444" : "#fff"} 
                    />
                  </TouchableOpacity>
                  <View style={styles.eventTextContainer}>
                    <Text style={styles.eventTitle}>Another Music Festival</Text>
                    <Text style={styles.eventLocationText}>Some City, India</Text>
                  </View>
                   <TouchableOpacity style={styles.eventArrowButton} onPress={() => navigation.navigate('UserEvent')}>
                     <Icon name="arrow-right" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Example Event Card 2 */}
              <View style={styles.eventCardContainerHorizontalScroll}>
                {/* Purple Gradient Background */}
                <LinearGradient
                  colors={['#B15CDE', '#7952FC']} // Purple gradient colors from image
                  start={{ x: 0, y: 0 }} // Start gradient at top-left
                  end={{ x: 1, y: 1 }} // End gradient at bottom-right
                  style={styles.eventCardGradientBackground}
                />
                {/* Large Event Image Card Content */}
                <View style={styles.eventCardContent}>
                  <Image
                    source={require('../assets/Images/rr.png')} // Placeholder image
                    style={styles.eventImage}
                    resizeMode="cover"
                  />
                  <View style={styles.imageOverlay} />
                  <TouchableOpacity 
                    style={styles.heartIconPlaceholder}
                    onPress={() => handleFavoriteToggle(eventIds.upcoming1)}
                  >
                    <Ionicons 
                      name={isUpcoming1Favorite ? "heart" : "heart-outline"} 
                      size={24} 
                      color={isUpcoming1Favorite ? "#ff4444" : "#fff"} 
                    />
                  </TouchableOpacity>
                  <View style={styles.eventTextContainer}>
                    <Text style={styles.eventTitle}>Stand-up Comedy Night</Text>
                    <Text style={styles.eventLocationText}>Comedy Club, City</Text>
                  </View>
                   <TouchableOpacity style={styles.eventArrowButton} onPress={() => navigation.navigate('UserEvent')}>
                     <Icon name="arrow-right" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Example Event Card 3 */}
              <View style={styles.eventCardContainerHorizontalScroll}>
                {/* Purple Gradient Background */}
                <LinearGradient
                  colors={['#B15CDE', '#7952FC']} // Purple gradient colors from image
                  start={{ x: 0, y: 0 }} // Start gradient at top-left
                  end={{ x: 1, y: 1 }} // End gradient at bottom-right
                  style={styles.eventCardGradientBackground}
                />
                {/* Large Event Image Card Content */}
                <View style={styles.eventCardContent}>
                  <Image
                    source={require('../assets/Images/wall.jpg')} // Placeholder image
                    style={styles.eventImage}
                    resizeMode="cover"
                  />
                  <View style={styles.imageOverlay} />
                  <TouchableOpacity 
                    style={styles.heartIconPlaceholder}
                    onPress={() => handleFavoriteToggle(eventIds.upcoming2)}
                  >
                    <Ionicons 
                      name={isUpcoming2Favorite ? "heart" : "heart-outline"} 
                      size={24} 
                      color={isUpcoming2Favorite ? "#ff4444" : "#fff"} 
                    />
                  </TouchableOpacity>
                  <View style={styles.eventTextContainer}>
                    <Text style={styles.eventTitle}>Basketball Game</Text>
                    <Text style={styles.eventLocationText}>Sports Stadium, City</Text>
                  </View>
                   <TouchableOpacity style={styles.eventArrowButton} onPress={() => navigation.navigate('UserEvent')}>
                     <Icon name="arrow-right" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>

            </ScrollView>
          </View>
        </LinearGradient>

        {/* Booking Buttons */}
        <View style={styles.bookingButtonsContainer}>
          <TouchableOpacity style={styles.bookingButton}>
            <Text style={styles.bookingButtonText}>Artist Booking</Text>
            <Icon name="chevron-right" size={20} color="#a95eff" />
          </TouchableOpacity>
           <TouchableOpacity style={styles.bookingButton} onPress={() => navigation.navigate('UserVenueBookingScreen')}>
            <Text style={styles.bookingButtonText}>Venue Booking</Text>
             <Icon name="chevron-right" size={20} color="#a95eff" />
          </TouchableOpacity>
        </View>

        {/* Get Your Vibe Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Your Vibe</Text>
          {/* Vertical list of category cards */}
            {/* Spotlight Card */}
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/Images/f11.png')} style={styles.categoryImage} resizeMode="cover" />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}></Text>
            </TouchableOpacity>
            {/* Sports Screening Card */}
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/Images/f12.png')} style={styles.categoryImage} resizeMode="cover" />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}></Text>
            </TouchableOpacity>
            {/* Music & Party Card */}
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/Images/f13.png')} style={styles.categoryImage} resizeMode="cover" />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}></Text>
            </TouchableOpacity>
            {/* Trending Events Card */}
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/Images/f14.png')} style={styles.categoryImage} resizeMode="cover" />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}></Text>
            </TouchableOpacity>
            {/* Comedy Card */}
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={require('../assets/Images/f15.png')} style={styles.categoryImage} resizeMode="cover" />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryText}></Text>
            </TouchableOpacity>
        </View>

        {/* Category Navbar */}
        <View style={styles.categoryNavbarContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryNavbarScroll}>
            {/* Spotlight Button */}
            <TouchableOpacity style={styles.categoryNavItem}>
              <Image
                source={require('../assets/Images/spotlight.png')}
                style={styles.categoryNavIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryNavText}>Spotlight</Text>
            </TouchableOpacity>
            {/* Sports Button */}
            <TouchableOpacity style={styles.categoryNavItem}>
              <Image
                source={require('../assets/Images/sports.png')}
                style={styles.categoryNavIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryNavText}>Sports</Text>
            </TouchableOpacity>
            {/* Party Button */}
            <TouchableOpacity style={styles.categoryNavItem}>
              <Image
                source={require('../assets/Images/party.png')}
                style={styles.categoryNavIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryNavText}>Party</Text>
            </TouchableOpacity>
            {/* #Events Button */}
            <TouchableOpacity style={styles.categoryNavItem}>
              <Image
                source={require('../assets/Images/events.png')}
                style={styles.categoryNavIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryNavText}>#Events</Text>
            </TouchableOpacity>
            {/* Comedy Button */}
            <TouchableOpacity style={styles.categoryNavItem}>
              <Image
                source={require('../assets/Images/comedy.png')}
                style={styles.categoryNavIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryNavText}>Comedy</Text>
            </TouchableOpacity>
            {/* Workshop Button */}
            <TouchableOpacity style={styles.categoryNavItem}>
              <Image
                source={require('../assets/Images/workshop.png')}
                style={styles.categoryNavIcon}
                resizeMode="contain"
              />
              <Text style={styles.categoryNavText}>Workshop</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Latest Events Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest Events</Text>
          {/* Add list of upcoming events here */}
          {/* Horizontal list of event cards */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalEventList}>
            {/* Duplicate the event card structure for multiple items */}
            <View style={styles.eventCardContainerHorizontalScroll}>
              {/* Purple Gradient Background */}
              <LinearGradient
                colors={['#B15CDE', '#7952FC']} // Purple gradient colors from image
                start={{ x: 0, y: 0 }} // Start gradient at top-left
                end={{ x: 1, y: 1 }} // End gradient at bottom-right
                style={styles.eventCardGradientBackground}
              />
              {/* Large Event Image Card Content */}
              <View style={styles.eventCardContent}>
                <Image
                  source={require('../assets/Images/ffff.jpg')}
                  style={styles.eventImage}
                  resizeMode="cover"
                />
                <View style={styles.imageOverlay} />
                <TouchableOpacity 
                  style={styles.heartIconPlaceholder}
                  onPress={() => handleFavoriteToggle(eventIds.upcoming3)}
                >
                  <Ionicons 
                    name={isUpcoming3Favorite ? "heart" : "heart-outline"} 
                    size={24} 
                    color={isUpcoming3Favorite ? "#ff4444" : "#fff"} 
                  />
                </TouchableOpacity>
                <View style={styles.eventTextContainer}>
                  <Text style={styles.eventTitle}>Harmony Jam 2024</Text>
                  <Text style={styles.eventLocationText}>₹25.00 -₹125.00</Text>
                  <Text style={styles.eventLocationText}>Noida, India</Text>
                </View>
                 <TouchableOpacity style={styles.eventArrowButton} onPress={() => navigation.navigate('UserEvent')}>
                   <Icon name="arrow-right" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

             {/* Another event card example */}
             <View style={styles.eventCardContainerHorizontalScroll}>
              {/* Purple Gradient Background */}
              <LinearGradient
                colors={['#B15CDE', '#7952FC']} // Purple gradient colors from image
                start={{ x: 0, y: 0 }} // Start gradient at top-left
                end={{ x: 1, y: 1 }} // End gradient at bottom-right
                style={styles.eventCardGradientBackground}
              />
              {/* Large Event Image Card Content */}
              <View style={styles.eventCardContent}>
                <Image
                  source={require('../assets/Images/px.png')}
                  style={styles.eventImage}
                  resizeMode="cover"
                />
                <View style={styles.imageOverlay} />
                <TouchableOpacity 
                  style={styles.heartIconPlaceholder}
                  onPress={() => handleFavoriteToggle(eventIds.upcoming4)}
                >
                  <Ionicons 
                    name={isUpcoming4Favorite ? "heart" : "heart-outline"} 
                    size={24} 
                    color={isUpcoming4Favorite ? "#ff4444" : "#fff"} 
                  />
                </TouchableOpacity>
                <View style={styles.eventTextContainer}>
                  <Text style={styles.eventTitle}>Rhythm Rally 2024</Text>
                  <Text style={styles.eventLocationText}>₹25.00 -₹125.00</Text>
                  <Text style={styles.eventLocationText}>Delhi, India</Text>
                </View>
                 <TouchableOpacity style={styles.eventArrowButton} onPress={() => navigation.navigate('UserEvent')}>
                   <Icon name="arrow-right" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

             {/* Another event card example */}
             <View style={styles.eventCardContainerHorizontalScroll}>
              {/* Purple Gradient Background */}
              <LinearGradient
                colors={['#B15CDE', '#7952FC']} // Purple gradient colors from image
                start={{ x: 0, y: 0 }} // Start gradient at top-left
                end={{ x: 1, y: 1 }} // End gradient at bottom-right
                style={styles.eventCardGradientBackground}
              />
              {/* Large Event Image Card Content */}
              <View style={styles.eventCardContent}>
                <Image
                  source={require('../assets/Images/pxx.png')}
                  style={styles.eventImage}
                  resizeMode="cover"
                />
                <View style={styles.imageOverlay} />
                <TouchableOpacity 
                  style={styles.heartIconPlaceholder}
                  onPress={() => handleFavoriteToggle(eventIds.upcoming5)}
                >
                  <Ionicons 
                    name={isUpcoming5Favorite ? "heart" : "heart-outline"} 
                    size={24} 
                    color={isUpcoming5Favorite ? "#ff4444" : "#fff"} 
                  />
                </TouchableOpacity>
                <View style={styles.eventTextContainer}>
                  <Text style={styles.eventTitle}>Third Event Example</Text>
                  <Text style={styles.eventLocationText}>Mumbai, India</Text>
                </View>
                 <TouchableOpacity style={styles.eventArrowButton} onPress={() => navigation.navigate('UserEvent')}>
                   <Icon name="arrow-right" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

          </ScrollView>

        </View>

        {/* Plan for Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Plan for</Text>
          <View style={styles.planForButtonsContainer}>
            {/* Today Button */}
            <TouchableOpacity style={styles.planForButton}>
              <Image source={require('../assets/Images/Item.png')} style={styles.planForButtonImage} resizeMode="contain" />
              <Text style={styles.planForButtonText}></Text>
            </TouchableOpacity>
            {/* This Week Button */}
            <TouchableOpacity style={styles.planForButton}>
              <Image source={require('../assets/Images/Item2.png')} style={styles.planForButtonImage} resizeMode="contain" />
              <Text style={styles.planForButtonText}></Text>
            </TouchableOpacity>
            {/* Weekend Button */}
            <TouchableOpacity style={styles.planForButton}>
              <Image source={require('../assets/Images/Item3.png')} style={styles.planForButtonImage} resizeMode="contain" />
              <Text style={styles.planForButtonText}></Text>
            </TouchableOpacity>
          </View>

          {/* Category Filter Buttons */}
          <View style={styles.categoryFilterContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryFilterScroll}>
              {/* Filter Button */}
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.categoryFilterButtonText}>Filter</Text>
              </TouchableOpacity>
              {/* Nearby Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>Nearby</Text>
              </TouchableOpacity>
              {/* Today Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>Today</Text>
              </TouchableOpacity>
              {/* This Week Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>This Week</Text>
              </TouchableOpacity>
              {/* This Weekend Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>This Weekend</Text>
              </TouchableOpacity>
               {/* Next Weekend Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>Next Weekend</Text>
              </TouchableOpacity>
               {/* Tickets less than ₹1000 Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>Tickets less than ₹1000</Text>
              </TouchableOpacity>
               {/* ₹1000 - ₹5000 Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>₹1000 - ₹5000</Text>
              </TouchableOpacity>
               {/* ₹5000+ Button */}
              <TouchableOpacity style={styles.categoryFilterButton}>
                <Text style={styles.categoryFilterButtonText}>₹5000+</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#a95eff" />
          <Text style={[styles.navItemText, styles.navItemTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserFavoriteScreen')}>
          <Ionicons name="heart-outline" size={24} color="#fff" />
          <Text style={styles.navItemText}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserTicketScreen')}>
          <Image
            source={require('../assets/Images/ticket.png')}
            style={styles.navIcon}
            resizeMode="contain"
          />
          <Text style={styles.navItemText}>My Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('UserProfileScreen')}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.navItemText}>Profile</Text>
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
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    fontSize: 16,
    color: '#aaa',
    marginLeft: 4, // Space for a location pin icon later
  },
  iconContainer: {
    flexDirection: 'row',
    width: 80, // Adjust width as needed
    justifyContent: 'space-between',
  },
  sceneLogoContainer: {
    alignItems: 'center', // Center children horizontally
    justifyContent: 'center', // Center children vertically
    paddingVertical: 20,
    position: 'relative', // Enable absolute positioning of children
  },
  sceneLogo: {
    width: 295, // Increased size
    height: 160, // Increased size
    zIndex: 0, // Ensure logo is below the rabbit
  },
  rabbitGif: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    position: 'absolute',
    top: 40, // Adjust vertical position as needed
    left: '50%%',
    marginLeft: 25, // Shift left by half of the width to center horizontally
    zIndex: 1, // Ensure rabbit is above the logo
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventCardContainer: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  eventCardGradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  eventCardContent: {
    position: 'relative',
    zIndex: 1,
  },
  eventImage: {
    width: '100%%',
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  heartIconPlaceholder: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 8,
    zIndex: 1,
  },
  eventTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  eventLocationText: {
    fontSize: 12,
    color: '#aaa',
  },
   eventArrowButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 20,
    zIndex: 3,
   },
  bookingButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  bookingButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30, // Increased for more rounded corners
    marginHorizontal: 5,
    borderWidth: 1, // Add border
    borderColor: '#a95eff', // Purple border color matching active items
  },
  bookingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentArea: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  placeholderText: {
      color: '#aaa',
      fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Dark background for nav bar
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navItemText: {
    fontSize: 12,
    color: '#fff',
  },
  navItemTextActive: {
      color: '#a95eff', // Purple color for active item
  },
  eventCardContainerHorizontalScroll: {
    width: width * 0.65, // Reduce width so part of the next card is visible
    marginRight: 15, // Space between cards
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryCard: {
    width: '100%', // Make cards fill the width
    height: 120, // Adjust height as needed to match image
    borderRadius: 10, // Add rounded corners
    overflow: 'hidden',
    marginBottom: 15, // Space between cards
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust opacity as needed
  },
  categoryText: {
    position: 'absolute',
    bottom: 15, // Position text from the bottom
    left: 15, // Position text from the left
    zIndex: 2,
    color: '#fff',
    fontSize: 18, // Increase font size
    fontWeight: 'bold',
    flex: 1, // Ensure gradient covers the available space
  },
  gradientBackground: {
    flex: 1, // Ensure gradient covers the available space
    marginBottom: 30, // Add space below Featured Events section
    borderBottomLeftRadius: 60, // Add rounded bottom left corner
    borderBottomRightRadius: 60, // Add rounded bottom right corner
    overflow: 'hidden', // Ensure content respects the border radius
  },
  categoryNavbarContainer: {
    backgroundColor: '#000', // Black background
    paddingVertical: 10, // Add vertical padding
    marginBottom: 20, // Keep space below the navbar
    paddingHorizontal: 0, // Remove horizontal padding from container
  },
  categoryNavbarScroll: {
    flexDirection: 'row', // Ensure horizontal layout
    alignItems: 'center', // Center items vertically in scroll view
    // Removed paddingHorizontal from here
  },
  categoryNavItem: {
    flex: 1, // Distribute items evenly
    alignItems: 'center', // Center icon and text vertically
    backgroundColor: 'transparent', // No background on items
    paddingVertical: 5, // Add some vertical padding within the item
    marginHorizontal: 6, // Add horizontal margin for spacing
    // Removed paddingHorizontal and explicit width
  },
  categoryNavIcon: {
    width: 50, // Adjust icon size as needed
    height: 30, // Adjust icon size as needed
    marginBottom: 5, // Space between icon and text
    // No marginRight needed as text is below
  },
  categoryNavText: {
    fontSize: 12, // Adjust font size as needed
    color: '#fff', // White text color
    marginTop: 5, // Add some space above text
    // Removed incorrect duplicated styles
  },
  planForButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  planForButton: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    // Removed flexDirection and justifyContent as text is over image
    backgroundColor: 'transparent', // No background on the button itself
    borderRadius: 10, // Rounded corners
    marginHorizontal: 5, // Space between buttons
    overflow: 'hidden', // Hide parts of the image that exceed the border radius
    height: 80, // Set a fixed height for the button/image container
  },
  planForButtonImage: {
    position: 'absolute', // Position image absolutely to cover the button
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%', // Ensure image fills the button width
    height: '100%', // Ensure image fills the button height
    // Removed marginRight as text is not beside it
  },
  planForButtonText: {
    position: 'relative', // Keep text above the absolute image
    zIndex: 1, // Ensure text is clickable and visible above the image
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
    // No padding or margin needed here, centering handled by parent
  },
  categoryFilterContainer: {
    paddingVertical: 10, // Add vertical padding
    marginBottom: 20, // Keep space below the filter buttons
    paddingHorizontal: 0, // Remove horizontal padding from container
  },
  categoryFilterScroll: {
    flexDirection: 'row', // Ensure horizontal layout
    alignItems: 'center', // Center items vertically in scroll view
    paddingHorizontal: 16, // Add horizontal padding to the scroll view content
  },
  filterButton: {
    backgroundColor: '#a95eff', // Purple background for Filter button
    paddingVertical: 8, // Adjust vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
    borderRadius: 20, // More rounded corners
    marginRight: 10, // Space after the Filter button
  },
  categoryFilterButton: {
    backgroundColor: '#1c1c1c', // Dark background for other buttons
    paddingVertical: 8, // Adjust vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
    borderRadius: 20, // More rounded corners
    marginRight: 10, // Space between buttons
    borderWidth: 1, // Add border
    borderColor: '#333', // Border color
  },
  categoryFilterButtonText: {
    fontSize: 14, // Adjust font size
    color: '#fff', // White text color
    fontWeight: 'normal', // Normal font weight
  },
});

export default UserHomeScreen; 