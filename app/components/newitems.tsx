import Feather from '@expo/vector-icons/Feather';
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { justForYou } from "../dummydata";

export default function NewItems() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.just}>New Items</Text>
        <View style={styles.see}>
          <Text style={styles.all}>See All</Text>
          <Pressable style={styles.arrow}>
            <Feather name="arrow-right" size={20} color="white" />
          </Pressable>
        </View>
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
                <View style={styles.image}>
                  <Image style={{height: "100%", width: "100%", objectFit: "cover", borderRadius: 10}} source={ item.img } />
                </View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 30
  },
  see: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  all: {
    color: "#202020",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
  },
  contain: {
    flexDirection: "row",
    gap: 16,
    paddingRight: 16, // Add padding at the end of scroll
  },
  itemContainer: {
    width: 160, // Fixed width for each item
  },
  image: {
    width: "100%",
    height: 181,
    padding: 10,
    shadowColor: "#636363",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3, // For Android shadow
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 8
  },
  just: {
    color: "#202020",
    fontSize: 22,
    fontFamily: "Raleway_700Bold",
  },
  name: {
    color: "#202020",
    fontSize: 12,
    fontFamily: "Raleway_400Medium",
    marginBottom: 4
  },
  price: {
    color: "#202020",
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
  },
  arrow: {
    backgroundColor: "#0C54FF",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
});