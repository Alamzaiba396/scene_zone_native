import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Added for calendar icon

const NewEventScreen = ({ navigation }) => {
  const [soundSystemEnabled, setSoundSystemEnabled] = useState(true);
  const [eventName, setEventName] = useState('');
  const [venueName, setVenueName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [genre, setGenre] = useState('');
  const [budget, setBudget] = useState('');

  const textColor = '#fff';
  const subColor = '#ccc';
  const borderColor = '#333';

  const handleCreateEvent = () => {
    console.log('Event Created:', {
      eventName,
      venueName,
      date,
      time,
      genre,
      budget,
      soundSystemEnabled,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconCircle} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color={textColor} /> {/* Already white */}
          </TouchableOpacity>
          <Text style={[styles.dateText, { color: subColor }]}>08/16/23</Text>
        </View>

        {/* Upload Poster Section */}
        <View style={styles.uploadSection}>
          <TouchableOpacity style={styles.uploadBox}>
            <Feather name="upload" size={24} color={subColor} />
            <Text style={[styles.uploadText, { color: subColor }]}>
              Upload Event Poster
            </Text>
            <Text style={[styles.uploadSubText, { color: subColor }]}>
              THE DIMENSION SHOULD BE 317 * 215 px
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          {/* Event Name */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Event Name</Text>
            <TextInput
              style={[styles.input, { borderColor, color: '#000' }]}
              placeholder="Sounds of Celebration"
              placeholderTextColor={subColor}
              value={eventName}
              onChangeText={setEventName}
            />
          </View>

          {/* Venue Name */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Venue Name</Text>
            <TextInput
              style={[styles.input, { borderColor, color: '#000' }]}
              placeholder="xyz"
              placeholderTextColor={subColor}
              value={venueName}
              onChangeText={setVenueName}
            />
          </View>

          {/* Date and Time Row */}
          <View style={styles.row}>
            <View style={[styles.inputContainer, styles.halfWidth]}>
              <Text style={[styles.label, { color: textColor }]}>Date</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, { borderColor, color: '#000', paddingRight: 40 }]} // Space for icon
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor={subColor}
                  value={date}
                  onChangeText={setDate}
                />
                <MaterialIcons
                  name="calendar-today"
                  size={20}
                  color={subColor}
                  style={styles.calendarIcon}
                />
              </View>
            </View>
            <View style={[styles.inputContainer, styles.halfWidth]}>
              <Text style={[styles.label, { color: textColor }]}>Time</Text>
              <TextInput
                style={[styles.input, { borderColor, color: '#000' }]}
                placeholder="08:00"
                placeholderTextColor={subColor}
                value={time}
                onChangeText={setTime}
              />
              <Text style={[styles.timeSuffix, { color: textColor }]}>PM</Text>
            </View>
          </View>

          {/* Genre/Instrument */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Genre/Instrument</Text>
            <TextInput
              style={[styles.input, { borderColor, color: '#000' }]}
              placeholder="#Rock Star #Electric Guitar #Soul Queen"
              placeholderTextColor={subColor}
              value={genre}
              onChangeText={setGenre}
            />
          </View>

          {/* Budget */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: textColor }]}>Budget</Text>
            <TextInput
              style={[styles.input, { borderColor, color: '#000' }]}
              placeholder="$400"
              placeholderTextColor={subColor}
              keyboardType="numeric"
              value={budget}
              onChangeText={setBudget}
            />
          </View>

          {/* Sound System Availability */}
          <View style={styles.toggleRow}>
            <Text style={[styles.label, { color: textColor }]}>Sound System Availability</Text>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  soundSystemEnabled ? styles.checkboxActive : styles.checkboxInactive,
                ]}
                onPress={() => setSoundSystemEnabled(true)}
              >
                <Text style={[styles.checkboxText, { color: soundSystemEnabled ? '#000' : textColor }]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.checkbox,
                  !soundSystemEnabled ? styles.checkboxActive : styles.checkboxInactive,
                ]}
                onPress={() => setSoundSystemEnabled(false)}
              >
                <Text style={[styles.checkboxText, { color: !soundSystemEnabled ? '#000' : textColor }]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Create Event Button */}
        <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
          <Text style={styles.createButtonText}>Create Event</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#a95eff',
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginTop: 30,
  },
  iconCircle: {
    backgroundColor: '#2c2c2c',
    borderRadius: 50,
    padding: 6,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
  },
  uploadSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  uploadSubText: {
    fontSize: 10,
    fontWeight: '400',
    marginTop: 4,
  },
  formSection: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  calendarIcon: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  timeSuffix: {
    position: 'absolute',
    right: 12,
    top: 38,
    fontSize: 14,
    fontWeight: '400',
  },
  toggleRow: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  checkbox: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  checkboxActive: {
    backgroundColor: '#fff', // White background when active
  },
  checkboxInactive: {
    backgroundColor: 'transparent',
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '400',
  },
  createButton: {
    backgroundColor: '#fff', // White background for Create Event button
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 40,
  },
  createButtonText: {
    color: '#000', // Black text for contrast
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NewEventScreen;