import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, TextInput, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const messagesData = [
  {
    id: '1',
    image: null, // Placeholder image
    name: 'Maya',
    lastMessage: '$7500',
    unreadCount: 3,
  },
  {
    id: '2',
    image: null, // Placeholder image
    name: 'Sophia',
    lastMessage: '800',
    unreadCount: 2,
  },
  {
    id: '3',
    image: null, // Placeholder image
    name: 'Ella',
    lastMessage: '6000',
    unreadCount: 0,
  },
   {
    id: '4',
    image: null, // Placeholder image
    name: 'Luna',
    lastMessage: '200',
    unreadCount: 0,
  },
   {
    id: '5',
    image: null, // Placeholder image
    name: 'Zara',
    lastMessage: 'Are you kidding me?!',
    unreadCount: 0,
  },
    {
    id: '6',
    image: null, // Placeholder image
    name: 'Nina',
    lastMessage: '',
    unreadCount: 0,
  },
  // Add more placeholder message data here
];

const ArtistInboxScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [isNegotiationEnabled, setIsNegotiationEnabled] = useState(false);

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity style={styles.messageCard} onPress={() => navigation.navigate('Chat')}>
      <View style={styles.profileImagePlaceholder}>
         <Image source={item.image} style={styles.profileImage} />
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      {item.unreadCount > 0 && (
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>{item.unreadCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <View style={{ width: 24 }} />{/* Spacer */}
      </View>

      <View style={styles.negotiationToggleContainer}>
        <Text style={styles.negotiationToggleText}>Enable Negotiation</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#a95eff' }}
          thumbColor={isNegotiationEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsNegotiationEnabled}
          value={isNegotiationEnabled}
        />
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Message"
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={messagesData}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  negotiationToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  negotiationToggleText: {
    fontSize: 16,
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 12,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageCard: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#aaa',
  },
  unreadBadge: {
    backgroundColor: '#a95eff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  unreadText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ArtistInboxScreen; 