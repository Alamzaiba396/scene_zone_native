import React, { useState, useRef, use } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  PanResponder,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const cards = [
  {
    id: '1',
    title: 'ROCK',
    price: '$50,000',
    image: require('../assets/Images/swiper.png'),
  },
  {
    id: '2',
    title: 'JAZZ',
    price: '$30,000',
    image: require('../assets/Images/swiper.png'),
  },
  {
    id: '3',
    title: 'POP',
    price: '$70,000',
    image: require('../assets/Images/swiper.png'),
  },
];

const SWIPE_THRESHOLD = 120;
const SWIPE_OUT_DURATION = 250;

const HomeScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [showFilter, setShowFilter] = useState(false);
  const position = useRef(new Animated.ValueXY()).current;
 

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          swipeCard('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          swipeCard('left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  const swipeCard = (direction) => {
    const x = direction === 'right' ? width : -width;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prev) => prev - 1);
      position.setValue({ x: 0, y: 0 });
    });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
  };

  const rotate = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });

  const cardStyle = {
    transform: [{ translateX: position.x }, { translateY: position.y }, { rotate }],
  };

  const renderCard = (card, index) => {
    if (index < currentIndex - 2) return null;

    const isTopCard = index === currentIndex;

    const stackStyle = isTopCard
      ? [styles.card, cardStyle, { zIndex: 10 }]
      : [
          styles.card,
          {
            top: 10 * (currentIndex - index),
            zIndex: 10 - (currentIndex - index),
            transform: [{ scale: 1 - (currentIndex - index) * 0.05 }],
          },
        ];

    return (
      <Animated.View
        key={card.id}
        style={stackStyle}
        {...(isTopCard ? panResponder.panHandlers : {})}
      >
        <Image source={card.image} style={styles.cardImage} />

        <View style={styles.cardTopBadge}>
          <Text style={styles.topLabel}>Crowd Guarantee</Text>
          <Icon name="mic" size={18} color="#fff" />
        </View>

        <View style={styles.cardBottomPills}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{card.title}</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{card.price}</Text>
          </View>
        </View>
      </Animated.View>
    );
  };

  const FilterModal = () => (
    <Modal visible={showFilter} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>FILTER</Text>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <Icon name="x" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>FILTER</Text>
              <View style={styles.optionRow}>
                {['Near - Far', 'Far - Near', 'Today', 'This Week'].map((label) => (
                  <View key={label} style={styles.option}>
                    <Text style={styles.optionText}>{label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>PRICE</Text>
              <View style={styles.optionRow}>
                {['Low - High', 'High - Low', 'Tickets under ₹1000'].map((label) => (
                  <View key={label} style={styles.option}>
                    <Text style={styles.optionText}>{label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>INSTRUMENT</Text>
              <View style={styles.optionRow}>
                {['Electric Guitar', 'Saxophone', 'Acoustic Guitar'].map((label) => (
                  <View key={label} style={styles.option}>
                    <Text style={styles.optionText}>{label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>GENRE</Text>
              <View style={styles.optionRow}>
                {['Rock Star', 'Soul Queen', 'Indie Dreamer', 'Pop Icon'].map((label) => (
                  <View key={label} style={styles.option}>
                    <Text style={styles.optionText}>{label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity style={styles.continueButton} onPress={() => setShowFilter(false)}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello Brandon!</Text>
          <Text style={styles.location}>📍 H-70, Sector 63, Noida</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon name="bell" size={22} color="#a95eff" />
        </TouchableOpacity>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.curatedButton}>
        <Text style={styles.curatedButtonText}>Personalised Curated Events by Scenezone</Text>
      </TouchableOpacity>

      {/* Card Swiper */}
      <View style={styles.swiperContainer}>
        {currentIndex >= 0
          ? cards.map((card, index) => renderCard(card, index))
          : <Text style={styles.noCardsText}>No more cards to swipe!</Text>}
      </View>

      {/* Floating Action Buttons */}
      <View style={styles.floatingIcons}>
        <TouchableOpacity style={styles.floatingButton} onPress={() => setShowFilter(true)}>
          <Icon name="sliders" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton}>
          <Icon name="heart" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <FilterModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a95eff',
  },
  location: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 4,
  },
  curatedButton: {
    backgroundColor: '#1e1e1e',
    margin: 20,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  curatedButtonText: {
    color: '#fff',
    fontSize: 13,
  },
  swiperContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    borderRadius: 20,
    overflow: 'hidden',
    height: 520,
    width: width * 0.75,
    backgroundColor: '#000',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardTopBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00000066',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  topLabel: {
    color: '#fff',
    fontSize: 12,
  },
  cardBottomPills: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pill: {
    backgroundColor: '#00000099',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  pillText: {
    color: '#fff',
    fontSize: 12,
  },
  floatingIcons: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  floatingButton: {
    backgroundColor: '#a95eff',
    padding: 16,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  noCardsText: {
    color: '#888',
    fontSize: 16,
    marginTop: 40,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000cc',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#a95eff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 4,
  },
  optionText: {
    color: '#a95eff',
    fontSize: 12,
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  continueText: {
    color: '#a95eff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default HomeScreen;
