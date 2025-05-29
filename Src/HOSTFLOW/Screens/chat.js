import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const messages = [
  {
    id: '1',
    sender: 'host',
    amount: '4000',
  },
  {
    id: '2',
    sender: 'artist',
    amount: '5000',
  },
  // Add more placeholder messages here
];

const ChatScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState('');

  const renderMessage = ({ item }) => {
    const isHost = item.sender === 'host';
    return (
      <View style={[styles.messageBubbleContainer, isHost ? styles.hostMessageContainer : styles.artistMessageContainer]}>
        {!isHost && <View style={styles.profileImagePlaceholder} />} {/* Artist image placeholder */}
        <View style={[styles.messageBubble, isHost ? styles.hostBubble : styles.artistBubble]}>
          <Text style={styles.messageText}>{`${item.sender}: ${item.amount}₹`}</Text>
        </View>
        {isHost && <View style={styles.profileImagePlaceholder} />} {/* Host image placeholder */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Negotiation</Text>
        <View style={{ width: 24 }} />{/* Spacer */}
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
        inverted // To show latest messages at the bottom
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="₹5000"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={inputText}
          onChangeText={setInputText}
        />
        {/* Add send button here if needed */}
      </View>
       <Text style={styles.numericInputHint}>Numeric Inputs Only</Text>
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
  messageList: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  messageBubbleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  hostMessageContainer: {
    justifyContent: 'flex-start',
  },
  artistMessageContainer: {
    justifyContent: 'flex-end',
  },
   profileImagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#555', // Placeholder background color
    marginHorizontal: 8,
  },
  messageBubble: {
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
  },
  hostBubble: {
    backgroundColor: '#3a3a3a', // Host message background
  },
  artistBubble: {
    backgroundColor: '#a95eff', // Artist message background (purple)
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
  },
    numericInputHint: {
    color: '#aaa',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
   },
});

export default ChatScreen; 