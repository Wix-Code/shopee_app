import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { justForYou } from './dummydata';

const searchHistoryData = [
  { id: 1, term: 'Socks' },
  { id: 2, term: 'Summer Dress' },
  { id: 3, term: 'Running Shoes' },
  { id: 4, term: 'Denim Jeans' },
];

const recommendationsData = [
  { id: 1, term: 'Winter Jackets' },
  { id: 2, term: 'Cotton T-shirts' },
  { id: 3, term: 'Sneakers' },
  { id: 4, term: 'Backpacks' },
  { id: 5, term: 'Sunglasses' },
];

export default function Search() {
  const [searchHistory, setSearchHistory] = useState(searchHistoryData);
  const [searchQuery, setSearchQuery] = useState('');

  const openCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Sorry, we need camera permissions to use this feature.');
      return;
    }

    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Handle the captured image
      console.log('Image captured:', result.assets[0].uri);
      Alert.alert('Image Captured', 'You can now search using this image!');
    }
  };

  const clearSearchHistory = () => {
    Alert.alert(
      'Clear Search History',
      'Are you sure you want to clear your search history?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: () => setSearchHistory([]) },
      ]
    );
  };

  const removeHistoryItem = (id: number) => {
    setSearchHistory(searchHistory.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Search</Text>
          <View style={styles.searchContainer}>
            <TextInput 
              style={styles.searchInput}
              placeholder='Search products...'
              placeholderTextColor="#999999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Pressable style={styles.cameraButton} onPress={openCamera}>
              <Ionicons name="camera-outline" size={24} color="#0042E0" />
            </Pressable>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Search History */}
          {searchHistory.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Search History</Text>
                <Pressable style={styles.trashButton} onPress={clearSearchHistory}>
                  <Ionicons name="trash-outline" size={18} color="#D97474" />
                </Pressable>
              </View>
              <View style={styles.tagsContainer}>
                {searchHistory.map((item) => (
                  <Pressable 
                    key={item.id} 
                    style={styles.tag}
                    onLongPress={() => removeHistoryItem(item.id)}
                  >
                    <Text style={styles.tagText}>{item.term}</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          )}

          {/* Recommendations */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recommendations</Text>
            </View>
            <View style={styles.tagsContainer}>
              {recommendationsData.map((item) => (
                <Pressable key={item.id} style={styles.tag}>
                  <Text style={styles.tagText}>{item.term}</Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.grid}>
            {justForYou.map((item, index) => (
              <View key={index} style={styles.productCard}>
                <View style={styles.imageContainer}>
                  <Image source={item.img} style={styles.productImage} />
                </View>
                <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    color: "#202020",
    fontSize: 28,
    fontFamily: "Raleway_700Bold",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 15,
    fontFamily: "Raleway_400Regular",
    color: "#202020",
  },
  cameraButton: {
    padding: 8,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#202020",
    fontSize: 18,
    fontFamily: "Raleway_600SemiBold",
  },
  trashButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    backgroundColor: "#F4F4F4",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  tagText: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Raleway_500Medium",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  productCard: {
    width: "48%",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8,
    padding: 10,
    backgroundColor: "#F9F9F9",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },
  productName: {
    fontSize: 12,
    color: "#202020",
    fontFamily: "Raleway_500Medium",
    marginBottom: 4,
    lineHeight: 16,
  },
  productPrice: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
  },
});