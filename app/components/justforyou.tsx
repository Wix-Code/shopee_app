import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { justForYou } from "../dummydata";

export default function JustForYou() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.just}>Just for you</Text>
        <Ionicons name="star" size={18} color="#004CFF" />
      </View>
      <View style={styles.contain}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    marginTop: 20
  },
  contain: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16
  },
  itemContainer: {
    width: "47%", // This ensures 2 items per row with gap space
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
    color: "#0000",
    fontSize: 12,
    fontFamily: "Raleway_400Medium",
    marginBottom: 4
  },
  price: {
    color: "#202020",
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
  }
});