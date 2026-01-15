import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { justForYou } from './dummydata';

export default function RecentlyViewed() {
  const [activeTab, setActiveTab] = useState<'today' | 'yesterday'>('today');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Recently viewed</Text>
          
          {/* Tab Buttons */}
          <View style={styles.tabContainer}>
            <Pressable 
              style={[
                styles.tab,
                activeTab === 'today' && styles.tabActive
              ]}
              onPress={() => setActiveTab('today')}
            >
              <Text style={[
                styles.tabText,
                activeTab === 'today' && styles.tabTextActive
              ]}>
                Today
              </Text>
              {activeTab === 'today' && (
                <View style={styles.checkIcon}>
                  <FontAwesome5 name="check" size={12} color="white" />
                </View>
              )}
            </Pressable>

            <Pressable 
              style={[
                styles.tab,
                activeTab === 'yesterday' && styles.tabActive
              ]}
              onPress={() => setActiveTab('yesterday')}
            >
              <Text style={[
                styles.tabText,
                activeTab === 'yesterday' && styles.tabTextActive
              ]}>
                Yesterday
              </Text>
              {activeTab === 'yesterday' && (
                <View style={styles.checkIcon}>
                  <FontAwesome5 name="check" size={12} color="white" />
                </View>
              )}
            </Pressable>
          </View>
        </View>

        {/* Scrollable Products Grid - 2 columns */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
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
  tabContainer: {
    flexDirection: "row",
    gap: 10,
  },
  tab: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderRadius: 26,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabActive: {
    backgroundColor: "#E5EBFC",
  },
  tabText: {
    fontSize: 14,
    color: "#202020",
    fontFamily: "Raleway_500Medium",
  },
  tabTextActive: {
    color: "#004CFF",
    fontFamily: "Raleway_700Bold",
  },
  checkIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    alignItems: "center",
    backgroundColor: "#004CFF",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
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