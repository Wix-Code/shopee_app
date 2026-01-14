import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sizeOptions = [
  { id: 1, label: 'English' },
  { id: 2, label: 'French' },
  { id: 3, label: 'German' },
  { id: 4, label: 'Spannish' },
  { id: 5, label: 'Portuguese' },
  { id: 6, label: 'Chinnese' },
];

export default function Language() {
  const [selectedSize, setSelectedSize] = useState(1); // Default to US

  const handleSizeSelect = (sizeId: number) => {
    setSelectedSize(sizeId);
  };

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
          <Text style={styles.size}>Language</Text>
          
          {sizeOptions.map((option) => {
            const isActive = selectedSize === option.id;
            
            return (
              <Pressable
                key={option.id}
                style={[
                  styles.sizes,
                  isActive && styles.sizesActive
                ]}
                onPress={() => handleSizeSelect(option.id)}
              >
                <Text style={styles.text}>{option.label}</Text>
                <View style={[
                  styles.checkContainer,
                  isActive ? styles.pen : styles.penn
                ]}>
                  {isActive && (
                    <FontAwesome5 name="check" size={12} color="white" />
                  )}
                </View>
              </Pressable>
            );
          })}
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
  size: {
    color: "#202020",
    fontSize: 18,
    fontFamily: "Raleway_600SemiBold",
    marginBottom: 20,
  },
  sizes: {
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    height: 50,
    paddingHorizontal: 20,
  },
  sizesActive: {
    backgroundColor: "#E5EBFC",
  },
  text: {
    color: "#202020",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
  checkContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 15,
  },
  pen: {
    backgroundColor: "#004BFE",
  },
  penn: {
    backgroundColor: "#E9E9E9",
  },
});