import Feather from '@expo/vector-icons/Feather';
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { categories } from "../dummydata";

export default function Categories() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.just}>Categories</Text>
        <View style={styles.see}>
          <Text style={styles.all}>See All</Text>
          <Pressable style={styles.arrow}>
            <Feather name="arrow-right" size={20} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.contain}>
        {
          categories.map((item) => {
            return (
              <View key={item.id} style={styles.itemContainer}>
                <View style={styles.grid}>
                  {
                    item.img.map((img, index) => {
                      return (
                        <Image 
                          key={index}
                          style={styles.image} 
                          source={img} 
                        />
                      )
                    })
                  }
                </View> 
                <View style={styles.number}>
                  <Text style={styles.price}>{item.cat}</Text>
                  <Text style={styles.name}>530</Text>
                </View>
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
    marginTop: 8
  },
  all: {
    color: "#202020",
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
  },
  contain: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  itemContainer: {
    width: "47%",
    padding: 10,
    shadowColor: "#636363",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  image: {
    width: "48%",
    height: 70,
    borderRadius: 8,
  },
  just: {
    color: "#202020",
    fontSize: 22,
    fontFamily: "Raleway_700Bold",
  },
  name: {
    color: "#202020",
    fontSize: 14,
    fontFamily: "Raleway_600SemiBold",
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