import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { justForYou } from "../dummydata";

export default function MostPopular() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.just}>Most Popular</Text>
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
                <Image style={{width: "100%", objectFit: "cover", borderRadius: 10}} source={ item.img } /> 
                <View style={styles.number}>
                  <Text style={styles.price}>{item.price} <FontAwesome name="heart" size={12} color="#0042E0" /></Text>
                  <Text style={styles.name}>Hot</Text>
                </View>
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
  number: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5
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
    width: 120, // Fixed width for each item
    //width: "100%",
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
    fontSize: 14,
    fontFamily: "Raleway_400Medium",
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