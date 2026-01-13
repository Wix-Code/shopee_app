import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { justForYou } from "../dummydata";

export default function RecentlyViewed() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.just}>Recently viewed</Text>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contain}
      >
        {
          justForYou.map((item) => {
            return (
              <View key={item.id} style={styles.itemContainer}>
                <Image 
                  style={styles.image} 
                  source={item.img} 
                /> 
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginTop: 30
  },
  contain: {
    flexDirection: "row",
    gap: 16,
    paddingRight: 16,
    marginBottom: 20
  },
  itemContainer: {
    width: 80,
    height: 80,
    padding: 10,
    shadowColor: "#636363",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  just: {
    color: "#202020",
    fontSize: 22,
    fontFamily: "Raleway_700Bold",
  },
});