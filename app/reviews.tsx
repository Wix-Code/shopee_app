import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Reviews() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Reviews</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Review Card */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>V</Text>
              </View>
              <View style={styles.reviewInfo}>
                <Text style={styles.name}>Veronika</Text>
                <View style={styles.stars}>
                  <Text style={styles.starText}>⭐⭐⭐⭐⭐</Text>
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </Text>
          </View>

          {/* Additional Review Cards */}
          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>J</Text>
              </View>
              <View style={styles.reviewInfo}>
                <Text style={styles.name}>John Doe</Text>
                <View style={styles.stars}>
                  <Text style={styles.starText}>⭐⭐⭐⭐</Text>
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>
              Great product! Highly recommended for anyone looking for quality items.
            </Text>
          </View>

          <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>S</Text>
              </View>
              <View style={styles.reviewInfo}>
                <Text style={styles.name}>Sarah Smith</Text>
                <View style={styles.stars}>
                  <Text style={styles.starText}>⭐⭐⭐⭐⭐</Text>
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>
              Excellent service and fast delivery. The quality exceeded my expectations!
            </Text>
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
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  reviewCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0042E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
  },
  reviewInfo: {
    flex: 1,
  },
  name: {
    color: "#202020",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    marginBottom: 4,
  },
  stars: {
    flexDirection: "row",
  },
  starText: {
    fontSize: 14,
  },
  reviewText: {
    color: "#000000",
    fontSize: 14,
    fontFamily: "Raleway_400Regular",
    lineHeight: 22,
  },
});