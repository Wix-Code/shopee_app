import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logo}>
            <Image source={require("../../assets/images/logo.png")} />
          </View>
          
          <Text style={styles.about}>About Shoppe</Text>
          
          <Text style={styles.shop}>
            Shoppe - Shopping UI kit" is likely a user interface (UI) kit designed to facilitate the development of e-commerce or shopping-related applications. UI kits are collections of pre-designed elements, components, and templates that developers and designers can use to create consistent and visually appealing user interfaces.
          </Text>
          
          <Text style={styles.free}>
            If you need help or you have any questions, feel free to contact me by email.
          </Text>
          
          <Text style={styles.mail}>hello@mydomain.com</Text>
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
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  about: {
    fontFamily: "Raleway_700Bold",
    color: "#202020",
    fontSize: 24,
    marginBottom: 16,
  },
  shop: {
    fontFamily: "Raleway_400Regular",
    color: "#666666",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },
  free: {
    color: "#202020",
    lineHeight: 24,
    fontSize: 15,
    fontFamily: "Raleway_500Medium",
    marginBottom: 12,
  },
  mail: {
    color: "#0042E0",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
});