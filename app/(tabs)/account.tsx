import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Categories from '../components/categories';
import JustForYou from '../components/justforyou';
import MostPopular from '../components/mostpopular';
import NewItems from '../components/newitems';
import RecentlyViewed from '../components/recentlyviewed';
import TopProduct from '../components/topproduct';

export default function Account() {
  return (
    <ScrollView contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.activity}>
          <View style={styles.active}>

          </View>
          <View style={styles.icons}>
            <Link href="/shopping">
              <Feather name="settings" size={20} color="#004BFE" />
            </Link>
          </View>
        </View>
        <Text style={styles.name}>Hello, Romina!</Text>
        <View style={styles.announce}>
          <Text style={styles.announcement}>Announcement</Text>
          <View style={styles.announced}>
            <Text style={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.</Text>
            <Pressable style={styles.arrow}>
              <Feather name="arrow-right" size={20} color="white" />
            </Pressable>
          </View>
        </View>

        <RecentlyViewed />

        <View>
          <Text style={styles.order}>My Orders</Text>
          <View style={styles.pays}>
            <Pressable style={styles.pay}>
              <Text style={styles.receive}>To Pay</Text>
            </Pressable>
            <Pressable style={styles.pay}>
              <Text style={styles.receive}>To Receive</Text>
            </Pressable>
            <Pressable style={styles.pay}>
              <Text style={styles.receive}>To Review</Text>
            </Pressable>
          </View>
        </View>

        <NewItems />

        <MostPopular />

        <Categories />

        <TopProduct />

        <JustForYou />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffffff",
    padding: 20
  },
  active: {
    
  },
  activity: {
    
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    color: "#202020",
    fontSize: 28,
    fontFamily: "Raleway_700Bold",
    marginTop: 10,
    marginBottom: 10
  },

  order: {
    color: "#202020",
    fontSize: 22,
    fontFamily: "Raleway_700Bold",
    marginTop: 10,
    marginBottom: 10
  },

  receive: {
    color: "#0042E0",
    fontFamily: "Raleway_500Medium",
    fontSize: 16,
  },
  pays: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  pay: {
    color: "#202020",
    fontSize: 22,
    fontFamily: "Raleway_700Bold",
    //marginTop: 10,
    //marginBottom: 10
    backgroundColor: "#E5EBFC",
    //color: "#0042E0"
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20
  },

  announce: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#F8F8F8",
    flex: 1
  },

  announcement: {
    color: "#202020",
    fontSize: 14,
    fontFamily: "Raleway_700Bold",
    marginBottom: 6
  },

  announced: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  info: {
    flex: 1,
    color: "#000000",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: "Raleway_400Regular",
    textAlign: "justify",
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
