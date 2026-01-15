import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MostPopular from './components/mostpopular';
import RecentlyViewed from './components/recentlyviewed';

const wishlistItems = [
  {
    id: 1,
    image: require("../assets/images/5.jpg"),
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: "$130",
    color: "PINK",
    size: "M"
  },
  {
    id: 2,
    image: require("../assets/images/6.jpg"),
    description: "Elegant summer dress with floral pattern.",
    price: "$85",
    color: "BLUE",
    size: "L"
  },
  {
    id: 3,
    image: require("../assets/images/7.jpg"),
    description: "Casual cotton t-shirt for everyday wear.",
    price: "$45",
    color: "WHITE",
    size: "S"
  },
];

export default function WishList() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Wishlist</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <RecentlyViewed />
          
          {wishlistItems.length > 0 ? (
            <View style={styles.wishlistSection}>
              {wishlistItems.map((item) => (
                <View key={item.id} style={styles.cards}>
                  <View style={styles.img}>
                    <Image 
                      style={{ width: "100%", height: "100%", borderRadius: 10 }} 
                      source={item.image} 
                    />
                    <View style={styles.trash}>
                      <Ionicons name="trash-outline" size={22} color="#FF5790" />
                    </View>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.desc}>{item.description}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <View style={styles.line}>
                      <View style={{flexDirection: "row", gap: 10}}>
                        <Text style={styles.size}>{item.color}</Text>
                        <Text style={styles.size}>{item.size}</Text>
                      </View>
                      <View>
                        <MaterialCommunityIcons name="shopping-outline" size={24} color="#004BFE" />
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <View style={styles.layer}>
                <Image source={require("../assets/images/layer.png")} />
              </View>
              <Text style={styles.emptyTitle}>Your wishlist is empty</Text>
              <Text style={styles.emptyText}>Add items you love to your wishlist</Text>
            </View>
          )}

          <MostPopular />
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
    fontSize: 28,
    color: "#202020",
    fontFamily: "Raleway_700Bold",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  wishlistSection: {
    gap: 20,
    marginVertical: 20,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  layer: {
    width: 134,
    height: 134,
    borderRadius: 67,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  emptyTitle: {
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
    color: "#202020",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    fontFamily: "Raleway_400Regular",
    color: "#666666",
  },
  cards: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  img: {
    width: 128,
    height: 108,
    position: "relative",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#686868",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  desc: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Raleway_400Regular",
    lineHeight: 16,
  },
  price: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
  },
  size: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#E5EBFC",
    fontFamily: "Raleway_500Medium",
    fontSize: 14,
  },
  line: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  trash: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "absolute",
    justifyContent: "center",
    bottom: 10,
    left: 10,
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
});