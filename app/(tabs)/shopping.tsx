import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { settings } from '../dummydata';

export default function ShoppingCart() {
  const [openDelete, setOpenDelete] = useState(false);

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
          <View style={styles.set}>
            {settings.map((item) => {
              return (
                <View key={item.name} style={styles.section}>
                  <Text style={styles.sectionTitle}>{item.name}</Text>
                  <View style={styles.settingsContainer}>
                    {item.lists.map((setting, index) => {
                      const isLast = index === item.lists.length - 1;
                      const route = setting.href || `/${setting.name.toLowerCase().replace(/\s+/g, '-')}`;
                      
                      return (
                        <Link
                          href={route as any}
                          key={setting.id}
                          style={[
                            styles.setting,
                            isLast && styles.settingLast
                          ]}
                        >
                          <Text style={styles.settingName}>{setting.name}</Text>
                          <View style={styles.arrowContainer}>
                            <SimpleLineIcons name="arrow-right" size={18} color="#666666" />
                          </View>
                        </Link>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
          
          <View style={styles.footer}>
            <Pressable onPress={() => setOpenDelete(true)}>
              <Text style={styles.delete}>Delete My Account</Text>
            </Pressable>
            <Text style={styles.slada}>Slada</Text>
            <Text style={styles.version}>Version 1.0 April, 2020</Text>
          </View>
        </ScrollView>
      </View>

      {/* Delete Account Modal */}
      <Modal
        visible={openDelete}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setOpenDelete(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.you}>You are going to delete{'\n'}your account</Text>
            <Text style={styles.data}>You won't be able to restore your data</Text>
            
            <View style={styles.buttonContainer}>
              <Pressable 
                style={styles.cancelButton}
                onPress={() => setOpenDelete(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
              <Pressable 
                style={styles.deleteButton}
                onPress={() => {
                  // Handle delete account logic here
                  setOpenDelete(false);
                }}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
            </View>
            <View style={styles.circle}>
              <View style={styles.circled}>
                <View style={styles.dot}><AntDesign name="exclamation" size={12} color="white" /></View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
  set: {
    flexDirection: "column",
    gap: 32,
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    color: "#202020",
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
    marginBottom: 12,
  },
  settingsContainer: {
    
  },
  setting: {
    flexDirection: "row",
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E9E9E9",
    backgroundColor: "#FFFFFF",
  },
  settingLast: {
    
  },
  settingName: {
    color: "#202020",
    fontSize: 15,
    fontFamily: "Raleway_500Medium",
    flex: 1,
    marginRight: 16,
  },
  arrowContainer: {
    marginLeft: 'auto',
  },
  footer: {
    marginTop: 30,
  },
  delete: {
    color: "#D97474",
    fontSize: 14,
    fontFamily: "Raleway_600SemiBold",
    marginBottom: 30,
  },
  slada: {
    color: "#202020",
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
  },
  version: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Raleway_400Regular",
    marginTop: 8,
  },
  
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  you: {
    color: "#202020",
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
    textAlign: "center",
    marginBottom: 12,
    marginTop: 40,
    lineHeight: 28,
  },
  data: {
    color: "#666666",
    fontSize: 14,
    fontFamily: "Raleway_500Medium",
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#202020",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#D97474",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45, 
    backgroundColor: "#ffffff",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
    top: -42,
    left: "42%",
  },
  circled: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center"
  },
  dot: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 11, 
    backgroundColor: "#F1AEAE"
  },
});