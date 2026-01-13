import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { settings } from '../dummydata';

export default function ShoppingCart() {

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
                      // Use href if available, otherwise create route from name
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
    //paddingHorizontal: 16,
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
});