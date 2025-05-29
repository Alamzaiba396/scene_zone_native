import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const ArtistPaymentSettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Settings</Text>
      </View>
      <ScrollView style={styles.scrollViewContent}>
        {/* UPI ID */}
        <Text style={styles.label}>UPI ID</Text>
        <TextInput
          style={styles.input}
          placeholder="user01@ybl"
          placeholderTextColor="#aaa"
        />

        {/* Account Number */}
        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
        />

        {/* Account Holder and IFSC */}
        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Account Holder</Text>
            <TextInput
              style={styles.halfInput}
              placeholder="User 001"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>IFSC</Text>
            <TextInput
              style={styles.halfInput}
              placeholder="BKYD"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        {/* Upload QR Code */}
        <Text style={styles.label}>Upload Your QR Code</Text>
        <TouchableOpacity style={styles.uploadQrCodeContainer}>
          <View style={styles.uploadQrCodeContent}>
            <Ionicons name="camera-outline" size={30} color="#a95eff" />
            <Text style={styles.uploadQrCodeText}>Upload QR Code</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Save Details Button */}
      <TouchableOpacity style={styles.saveButton}>
        <LinearGradient colors={['#a95eff', '#b33bf6']} style={styles.saveButtonGradient}>
          <Text style={styles.saveButtonText}>Save Details</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 16,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  halfInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  halfInput: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  uploadQrCodeContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a95eff',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadQrCodeContent: {
    alignItems: 'center',
  },
  uploadQrCodeText: {
    fontSize: 16,
    color: '#a95eff',
    marginTop: 8,
  },
  saveButton: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  saveButtonGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ArtistPaymentSettingsScreen;
