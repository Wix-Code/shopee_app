import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/categories';
import JustForYou from '../components/justforyou';
import MostPopular from '../components/mostpopular';
import NewItems from '../components/newitems';
import TopProduct from '../components/topproduct';

export default function index() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header Section */}
        <View style={styles.header}>
          <View style={styles.contain}>
            <Text style={styles.shop}>Shop</Text>
            <View style={styles.input}>
              <TextInput 
                placeholder='Search' 
                style={styles.textInput}
                placeholderTextColor="#999999"
              />
              <SimpleLineIcons name="camera" size={24} color="#0042E0" />
            </View>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Categories />
          <TopProduct />
          <NewItems />
          <MostPopular />
          <JustForYou />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
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
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  shop: {
    color: "#202020",
    fontSize: 28,
    fontFamily: "Raleway_700Bold",
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    height: 36,
    flex: 1,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    fontFamily: "Raleway_500Medium",
    fontSize: 14,
    color: "#202020",
  }
})