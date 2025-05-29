import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions,
  Share,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const EventDashboardScreen = ({ navigation }) => {
  const [isGuestListEnabled, setIsGuestListEnabled] = useState(false);
  const [soundSystemAvailable, setSoundSystemAvailable] = useState(true);
  const [isEventActive, setIsEventActive] = useState(true); // New state for event status

  const textColor = '#fff';
  const subColor = '#ccc';

  // Share event functionality
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Check out this event: Sounds of Celebration on May 20 at Yogyakarta! 🎶',
        url: 'https://example.com/event/sounds-of-celebration', // Replace with actual event URL
        title: 'Sounds of Celebration',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing event:', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={20} color={textColor} />
        </TouchableOpacity>
        <View style={styles.centerTitle}>
          <Text style={styles.centerText}>Event Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.iconCircle} onPress={onShare}>
          <Image
            source={require('../assets/Images/Share.png')}
            style={styles.shareIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/Images/frame1.png')}
          style={styles.profilePic}
        />
        <View>
          <Text style={[styles.name, { color: textColor }]}>Michael De Santa</Text>
          <Text style={[styles.role, { color: subColor }]}>Organizer</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Upcoming</Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <View style={styles.statIcon}>
            <MaterialIcons name="person-add" size={20} color="#fff" />
          </View>
          <Text style={styles.statValue}>1.2K</Text>
          <Text style={styles.statLabel}>Registered</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statIcon}>
            <MaterialIcons name="visibility" size={20} color="#fff" />
          </View>
          <Text style={styles.statValue}>12.6K</Text>
          <Text style={styles.statLabel}>Viewed</Text>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statIcon}>
            <MaterialIcons name="favorite" size={20} color="#fff" />
          </View>
          <Text style={styles.statValue}>752</Text>
          <Text style={styles.statLabel}>Liked</Text>
        </View>
      </View>

      {/* Event Title and Tags */}
      <Text style={[styles.eventTitle, { color: textColor }]}>Sounds of Celebration</Text>
      <View style={styles.tagsRow}>
        {['Rock', 'Classical', 'Jazz', 'Piano', 'Guitar'].map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Toggle Switch for Guest List */}
      <View style={styles.toggleRow}>
        <Text style={[styles.toggleLabel, { color: textColor }]}>
          {isGuestListEnabled ? 'Disable Guest List' : 'Enable Guest List'}
        </Text>
        <Switch
          value={isGuestListEnabled}
          onValueChange={setIsGuestListEnabled}
          trackColor={{ false: '#767577', true: '#a95eff' }}
          thumbColor={isGuestListEnabled ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Conditionally Render Guest List Section */}
      {isGuestListEnabled && (
        <View style={styles.guestListSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate('GuestList')} // Replace with actual screen name
          >
            <Text style={[styles.guestListText, { color: textColor }]}>Guest List</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Timing */}
      <View style={styles.timeRow}>
        <Text style={[styles.timeText, { color: '#a95eff' }]}>⏱ Timing: 08:30PM</Text>
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
        {/* Edit Event Details Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditEventScreen')} // Replace with actual screen name
        >
          <Text style={styles.editButtonText}>Edit Details</Text>
        </TouchableOpacity>
      </View>

      {/* Event Status Toggle */}
      <View style={styles.toggleRow}>
        <Text style={[styles.toggleLabel, { color: textColor }]}>
          Event Status: {isEventActive ? 'GuestList' : 'Inactive'}
        </Text>
        <Switch
          value={isEventActive}
          onValueChange={setIsEventActive}
          trackColor={{ false: '#767577', true: '#a95eff' }}
          thumbColor={isEventActive ? '#fff' : '#f4f3f4'}
        />
      </View>

      {/* Sound System Availability */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    backgroundColor: '#2c2c2c',
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
    tintColor: '#fff',
  },
  profileSection: {
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
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statIcon: {
    backgroundColor: '#a95eff',
    borderRadius: 50,
    padding: 8,
    marginBottom: 8,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statLabel: {
    color: '#ccc',
    fontSize: 12,
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
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  toggleLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  guestListSection: {
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  guestListText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
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
    marginBottom: 10,
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
  editButton: {
    backgroundColor: '#a95eff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 12,
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
    marginLeft: 4,
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

export default EventDashboardScreen;