import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const ExploreEventScreen = ({ navigation }) => {
  const isDark = useColorScheme() === 'dark';
  const textColor = '#fff';
  const subColor = '#ccc';

  // State for checkbox
  const [soundSystemAvailable, setSoundSystemAvailable] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#000' }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color={textColor} />
          </TouchableOpacity>
          <View style={styles.centerTitle}>
            <TouchableOpacity onPress={() => navigation.navigate('Event')}>
              <Text style={styles.centerText}>Event Dashboard</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity >
            <Image
              source={require('../assets/Images/Share.png')}
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Cover Image */}
        <Image source={require('../assets/Images/swiper.png')} style={styles.coverImage} />

        {/* Organizer Section */}
        <View style={styles.organizerRow}>
          <Image source={require('../assets/Images/Avatar.png')} style={styles.profilePic} />
          <View>
            <Text style={[styles.name, { color: textColor }]}>Michael De Santa</Text>
            <Text style={[styles.role, { color: subColor }]}>Organizer</Text>
          </View>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Upcoming</Text>
          </View>
        </View>

        {/* Timing */}
        <View style={styles.timeRow}>
          <Text style={[styles.timeText, { color: '#a95eff' }]}>⏱ Timing: 08:30PM</Text>
        </View>

        {/* Event Title */}
        <Text style={[styles.eventTitle, { color: textColor }]}>Sounds of Celebration</Text>

        {/* Tags */}
        <View style={styles.tagsRow}>
          {['Rock', 'Classical', 'Jazz', 'Piano', 'Guitar'].map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Date/Location/Budget */}
        <View style={[styles.infoCard, { backgroundColor: '#2c2c2c' }]}>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <MaterialIcons name="date-range" size={14} color="#a95eff" />
              <Text style={styles.infoText}>Date: May 20</Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialIcons name="location-pin" size={14} color="#a95eff" />
              <Text style={styles.infoText}>Location: Yogyakarta</Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialIcons name="attach-money" size={14} color="#a95eff" />
              <Text style={styles.infoText}>Budget: $400</Text>
            </View>
          </View>
        </View>

        {/* Sound System */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>Sound System Availability</Text>
        <View style={styles.checkboxRow}>
          <TouchableOpacity
            style={[
              styles.checkbox,
              soundSystemAvailable ? styles.checkboxActive : styles.checkboxInactive,
            ]}
            onPress={() => setSoundSystemAvailable(true)}
          >
            <Text style={styles.checkboxText}>Yes</Text>
            {soundSystemAvailable && (
              <MaterialIcons name="check" size={14} color="#fff" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.checkbox,
              !soundSystemAvailable ? styles.checkboxActive : styles.checkboxInactive,
            ]}
            onPress={() => setSoundSystemAvailable(false)}
          >
            <Text style={styles.checkboxText}>No</Text>
            {!soundSystemAvailable && (
              <MaterialIcons name="check" size={14} color="#fff" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
        </View>

        {/* About Event */}
        <Text style={[styles.sectionTitle, { color: textColor }]}>About this event:</Text>
        <Text style={[styles.aboutText, { color: subColor }]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec lorem a justo pulvinar suscipit.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  header: {
    marginTop: 30,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  centerText: {
    backgroundColor: '#2c2c2c', // Updated to match screenshot
    color: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    fontSize: 14,
    fontWeight: '600',
  },
  iconCircle: {
    backgroundColor: '#2c2c2c',
    borderRadius: 50,
    padding: 6,
  },
  shareIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff', // Ensure the icon is white to match the screenshot
  },
  coverImage: {
    width: width,
    height: width * 0.65,
    resizeMode: 'cover',
  },
  organizerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: { 
    fontSize: 13,
    fontWeight: '500',
  },
  role: { 
    fontSize: 11,
  },
  statusBadge: {
    backgroundColor: '#a95eff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginLeft: 'auto',
  },
  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
  },
  timeRow: {
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  timeText: {
    fontSize: 12,
    backgroundColor: '#2c2c2c',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 12,
    marginTop: 6,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    paddingHorizontal: 12,
    marginTop: 6,
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  tagText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '400',
  },
  infoCard: {
    borderRadius: 12,
    marginHorizontal: 12,
    padding: 10,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  checkboxRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 16,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
  checkboxActive: {
    backgroundColor: '#a95eff',
  },
  checkboxInactive: {
    backgroundColor: '#444',
  },
  checkIcon: {
    marginLeft: 4, // Position the check icon to the right of the text
  },
  checkboxText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  aboutText: {
    paddingHorizontal: 12,
    fontSize: 12,
    lineHeight: 18,
    paddingBottom: 40,
  },
});

export default ExploreEventScreen;