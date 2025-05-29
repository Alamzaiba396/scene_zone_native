import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const UserEvent = ({ navigation }) => {
  // Add state for sound system availability
  const [soundSystemAvailable, setSoundSystemAvailable] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/Images/Event.png')} // Replace with your actual image pathr
        style={styles.eventImage}
      />
      {/* Back and Share buttons */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
      </TouchableOpacity>
      {/* Share button would go here */}

      <View style={styles.detailsContainer}>
        {/* Organizer Info */}
        <View style={styles.organizerContainer}>
          {/* Organizer Image Placeholder */}
          <View style={styles.organizerImage} />
          <View>
            <Text style={styles.organizerName}>Michael De Santa</Text>
            <Text style={styles.organizerTitle}>Organizer</Text>
          </View>
          {/* Upcoming Button Placeholder */}
          <View style={styles.upcomingButton} />
        </View>

        {/* Timing and Price */}
        <View style={styles.timingPriceContainer}>
          <Text style={styles.timing}>Timing: 08:30PM</Text>
          <Text style={styles.price}>$400-$500</Text>
        </View>

        <Text style={styles.eventTitle}>Sounds of Celebration</Text>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {/* Category Buttons Placeholder */}
          <Text style={styles.categoryButton}>Rock</Text>
          <Text style={styles.categoryButton}>Classical</Text>
          <Text style={styles.categoryButton}>Jazz</Text>
          <Text style={styles.categoryButton}>Piano</Text>
          <Text style={styles.categoryButton}>Guitar</Text>
        </View>

        {/* Event Details Grid */}
        <View style={styles.eventDetailsGrid}>
          <View style={styles.gridItem}>
            {/* Calendar Icon */}
            <View style={styles.gridItemContent}>
              <Ionicons name="calendar-outline" size={16} color="#a95eff" />
              <Text style={styles.gridItemLabel}>Date</Text>
            </View>
            <Text style={[styles.gridItemValue, { color: '#a95eff' }]}>May 20</Text>
          </View>
          <View style={styles.gridItem}>
            {/* Location Icon */}
            <View style={styles.gridItemContent}>
              <Ionicons name="location-outline" size={16} color="#a95eff" />
              <Text style={styles.gridItemLabel}>Location</Text>
            </View>
            <Text style={[styles.gridItemValue, { color: '#a95eff' }]}>Yogyakarta</Text>
          </View>
          <View style={styles.gridItem}>
            {/* Crowd Icon */}
            <View style={styles.gridItemContent}>
              <Ionicons name="people-outline" size={16} color="#a95eff" />
              <Text style={styles.gridItemLabel}>Crowd Capacity</Text>
            </View>
            <Text style={[styles.gridItemValue, { color: '#a95eff' }]}>500</Text>
          </View>
        </View>

        {/* Sound System Availability */}
        <View style={styles.availabilityContainer}>
          <Text style={styles.availabilityTitle}>Sound System Availability</Text>
          <View style={styles.checkboxContainer}>
            {/* Checkboxes */}
            <TouchableOpacity style={styles.checkboxOption} onPress={() => setSoundSystemAvailable(true)}>
              <Ionicons
                name={soundSystemAvailable ? 'checkbox-outline' : 'square-outline'}
                size={24}
                color={'#a95eff'}
              />
              <Text style={styles.checkboxLabel}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkboxOption} onPress={() => setSoundSystemAvailable(false)}>
              <Ionicons
                name={soundSystemAvailable ? 'square-outline' : 'checkbox-outline'}
                size={24}
                color={'#a95eff'}
              />
              <Text style={styles.checkboxLabel}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* About this event */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About this event:</Text>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
          </Text>
        </View>

      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtonsContainer}>
        {/* Heart Icon Button */}
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="heart-outline" size={24} color="#a95eff" />
        </TouchableOpacity>

        {/* Sold Out Button */}
        <TouchableOpacity style={styles.soldOutButton}>
           <LinearGradient
            colors={['#B15CDE', '#7952FC']} // Purple gradient colors
            start={{ x: 0, y: 0 }} // Start gradient at top-left
            end={{ x: 1, y: 1 }} // End gradient at bottom-right
            style={StyleSheet.absoluteFill}
          />
          <Text style={styles.soldOutButtonText}>Sold Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  eventImage: {
    width: '100%',
    height: 200,
    // Add more styles for image aspect ratio and positioning
  },
  detailsContainer: {
    padding: 20,
  },
  organizerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  organizerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333', // Placeholder background
    marginRight: 10,
  },
  organizerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  organizerTitle: {
    fontSize: 14,
    color: '#ccc',
  },
  upcomingButton: {
    marginLeft: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#8a2be2', // Example color
    borderRadius: 15,
    // Add text style for the button if needed
  },
  timingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timing: {
    fontSize: 16,
    color: '#fff',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#333', // Example color
    color: '#fff',
  },
  eventDetailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#1c1c1c', // Example background
    padding: 15,
    borderRadius: 10,
  },
  gridItem: {
    alignItems: 'center',
  },
  gridItemLabel: {
    fontSize: 12,
    color: '#ccc',
    marginBottom: 5,
  },
  gridItemValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  gridItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  availabilityContainer: {
    marginBottom: 20,
  },
  availabilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 16,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#ccc',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  heartButton: {
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    padding: 12,
    marginRight: 15,
  },
  soldOutButton: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  soldOutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1, // Ensure text is above the gradient
  },
});

export default UserEvent; 