import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MostPopular from './components/mostpopular';

const cartItems = [
  {
    id: 1,
    image: require("../assets/images/1.jpg"),
    description: "Casual summer dress with floral pattern",
    price: "$95",
    color: "Blue",
    size: "L",
    quantity: 1
  },
  {
    id: 2,
    image: require("../assets/images/2.jpg"),
    description: "Premium cotton t-shirt for daily wear",
    price: "$35",
    color: "White",
    size: "M",
    quantity: 2
  },
];

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
];

export default function Cart() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Cart</Text>
          <Text style={styles.cartCount}>{cartItems.length}</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Shipping Address */}
          <View style={styles.contain}>
            <Text style={styles.shippingTitle}>Shipping Address</Text>
            <View style={styles.addressRow}>
              <Text style={styles.addressText}>
                26, Duong So 2, Thao Dien Ward, An Phu, District 2,{"\n"}Ho Chi Minh city
              </Text>
              <Pressable style={styles.editButton}>
                <FontAwesome6 name="pen" size={14} color="#ffffff" />
              </Pressable>
            </View>
          </View>

          {/* Cart Items */}
          {cartItems.length > 0 ? (
            <View style={styles.wishlistSection}>
              {cartItems.map((item) => (
                <View key={item.id} style={styles.cards}>
                  <View style={styles.img}>
                    <Image 
                      style={styles.productImage} 
                      source={item.image} 
                    />
                    <Pressable style={styles.trash}>
                      <Ionicons name="trash-outline" size={22} color="#FF5790" />
                    </Pressable>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.desc}>{item.description}</Text>
                    <Text style={styles.colorSize}>{item.color}, Size {item.size}</Text>
                    <View style={styles.line}>
                      <Text style={styles.price}>{item.price}</Text>
                      <View style={styles.quantityControls}>
                        <Pressable style={styles.quantityButton}>
                          <Fontisto name="plus-a" size={16} color="#004bfe" />
                        </Pressable>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <Pressable style={styles.quantityButton}>
                          <Fontisto name="minus-a" size={16} color="#004bfe" />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <View style={styles.layer}>
                <Image source={require("../assets/images/bag.png")} />
              </View>
              <Text style={styles.emptyTitle}>Your cart is empty</Text>
              <Text style={styles.emptyText}>Add items to get started</Text>
            </View>
          )}

          {/* From Your Wishlist */}
          <Text style={styles.wish}>From Your Wishlist</Text>
          {wishlistItems.length > 0 ? (
            <View style={styles.wishlistSection}>
              {wishlistItems.map((item) => (
                <View key={item.id} style={styles.cards}>
                  <View style={styles.img}>
                    <Image 
                      style={styles.productImage} 
                      source={item.image} 
                    />
                    <Pressable style={styles.trash}>
                      <Ionicons name="trash-outline" size={22} color="#FF5790" />
                    </Pressable>
                  </View>
                  <View style={styles.card}>
                    <Text style={styles.desc}>{item.description}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <View style={styles.line}>
                      <View style={styles.sizeColorRow}>
                        <Text style={styles.size}>{item.color}</Text>
                        <Text style={styles.size}>{item.size}</Text>
                      </View>
                      <Pressable>
                        <MaterialCommunityIcons name="shopping-outline" size={24} color="#004BFE" />
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <View style={styles.layer}>
                <Image source={require("../assets/images/bag.png")} />
              </View>
              <Text style={styles.emptyTitle}>Your wishlist is empty</Text>
              <Text style={styles.emptyText}>Add items you love to your wishlist</Text>
            </View>
          )}

          <MostPopular />
        </ScrollView>

        {/* Fixed Checkout Section */}
        <View style={styles.checkoutContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalPrice}>$165</Text>
          </View>
          <Pressable style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </Pressable>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    color: "#202020",
    fontFamily: "Raleway_700Bold",
  },
  cartCount: {
    fontSize: 18,
    backgroundColor: "#E5EBFC",
    width: 30,
    height: 30,
    borderRadius: 15,
    color: "#000000",
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "Raleway_700Bold",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  contain: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    marginBottom: 20,
  },
  shippingTitle: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
  },
  addressRow: {
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  addressText: {
    flex: 1,
    fontSize: 10,
    color: "#000000",
    fontFamily: "Raleway_400Regular",
  },
  editButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#004BFE",
  },
  wishlistSection: {
    gap: 20,
    marginBottom: 20,
  },
  wish: {
    fontSize: 22,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
    marginBottom: 20,
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
  productImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  desc: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Raleway_400Regular",
    lineHeight: 16,
  },
  colorSize: {
    fontSize: 12,
    color: "#000000",
    fontFamily: "Raleway_500Medium",
  },
  price: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
  },
  line: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  quantityControls: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#004BFE",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#E5EBFC",
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
  },
  sizeColorRow: {
    flexDirection: "row",
    gap: 10,
  },
  size: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#E5EBFC",
    fontFamily: "Raleway_600SemiBold",
    fontSize: 14,
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
  checkoutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  totalRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  totalLabel: {
    fontSize: 20,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
  },
  totalPrice: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Raleway_700Bold",
  },
  checkoutButton: {
    backgroundColor: "#004CFF",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Raleway_500Medium",
  },
});