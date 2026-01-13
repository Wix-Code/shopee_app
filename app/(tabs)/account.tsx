import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/categories';
import JustForYou from '../components/justforyou';
import MostPopular from '../components/mostpopular';
import NewItems from '../components/newitems';
import RecentlyViewed from '../components/recentlyviewed';
import TopProduct from '../components/topproduct';

type TabType = 'activity' | 'wishlist' | 'cart' | 'notifications';

export default function Account() {
  const [activeTab, setActiveTab] = useState<TabType>('activity');
  const [voucherTab, setVoucherTab] = useState<'active' | 'progress'>('active');

  const renderContent = () => {
    switch (activeTab) {
      case 'activity':
        return (
          <>
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
          </>
        );

      case 'wishlist':
        return (
          <View style={styles.tabContent}>
            <View style={styles.rewards}>
              <Pressable 
                style={[styles.press, voucherTab === 'active' && styles.pressActive]}
                onPress={() => setVoucherTab('active')}
              >
                <Text style={[styles.progress, voucherTab === 'active' && styles.progressActive]}>Active Rewards</Text>
              </Pressable>
              <Pressable 
                style={[styles.press, voucherTab === 'progress' && styles.pressActive]}
                onPress={() => setVoucherTab('progress')}
              >
                <Text style={[styles.progress, voucherTab === 'progress' && styles.progressActive]}>Progress</Text>
              </Pressable>
            </View>

            {/* Voucher Card */}
            <View style={styles.voucherCard}>
              {/* Notches */}
              <View style={styles.notchLeft} />
              <View style={styles.notchRight} />
              
              {/* Header */}
              <View style={styles.voucherHeader}>
                <View style={styles.voucherTitleRow}>
                  <Feather name="tag" size={20} color="#0042E0" style={{marginRight: 8}} />
                  <Text style={styles.voucherTitle}>Voucher</Text>
                </View>
                <Text style={styles.voucherDate}>Valid Until 5.16.20</Text>
              </View>

              {/* Dashed Divider */}
              <View style={styles.dashedDivider} />

              {/* Content */}
              <View style={styles.voucherContent}>
                <View style={styles.voucherInfo}>
                  <View style={styles.iconCircle}>
                    <Feather name="gift" size={20} color="#0042E0" />
                  </View>
                  <View style={styles.voucherTextContainer}>
                    <Text style={styles.voucherMainText}>First Purchase</Text>
                    <Text style={styles.voucherSubText}>5% off for your next order</Text>
                  </View>
                </View>
                <Pressable style={styles.collectedButton}>
                  <Text style={styles.collectedButtonText}>Collected</Text>
                </Pressable>
              </View>
            </View>

            {/* Additional vouchers can be added here */}
            <View style={styles.voucherCard}>
              <View style={styles.notchLeft} />
              <View style={styles.notchRight} />
              
              <View style={styles.voucherHeader}>
                <View style={styles.voucherTitleRow}>
                  <Feather name="tag" size={20} color="#0042E0" style={{marginRight: 8}} />
                  <Text style={styles.voucherTitle}>Voucher</Text>
                </View>
                <Text style={styles.voucherDate}>Valid Until 6.30.20</Text>
              </View>

              <View style={styles.dashedDivider} />

              <View style={styles.voucherContent}>
                <View style={styles.voucherInfo}>
                  <View style={styles.iconCircle}>
                    <Feather name="percent" size={20} color="#0042E0" />
                  </View>
                  <View style={styles.voucherTextContainer}>
                    <Text style={styles.voucherMainText}>Summer Sale</Text>
                    <Text style={styles.voucherSubText}>10% off on all items</Text>
                  </View>
                </View>
                <Pressable style={styles.collectedButton}>
                  <Text style={styles.collectedButtonText}>Collected</Text>
                </Pressable>
              </View>
            </View>
          </View>
        );

      case 'cart':
        return (
          <View style={styles.tabContent}>
            <View style={styles.tabIcon}>
              <Feather name="shopping-bag" size={48} color="#0042E0" />
            </View>
            <Text style={styles.tabTitle}>Shopping Cart</Text>
            <Text style={styles.tabDescription}>Your cart items will appear here</Text>
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>Your cart is empty</Text>
              <Pressable style={styles.browseButton}>
                <Text style={styles.browseButtonText}>Browse Products</Text>
              </Pressable>
            </View>
          </View>
        );

      case 'notifications':
        return (
          <View style={styles.tabContent}>
            <View style={styles.tabIcon}>
              <Feather name="bell" size={48} color="#0042E0" />
            </View>
            <Text style={styles.tabTitle}>Notifications</Text>
            <Text style={styles.tabDescription}>Stay updated with your latest notifications</Text>
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No new notifications</Text>
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        {/* Fixed Header Section */}
        <View style={styles.header}>
          <View style={styles.activity}>
            <View style={styles.active}>
              <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={require("../../assets/images/pic.jpg")} />
              </View>
              <Pressable 
                style={[
                  styles.activityButton,
                  activeTab === 'activity' && styles.activityButtonActive
                ]}
                onPress={() => setActiveTab('activity')}
              >
                <Text style={[styles.act, activeTab === "activity" && styles.text]}>My Activity</Text>
              </Pressable>
            </View>
            <View style={styles.icons}>
              <Pressable 
                style={[
                  styles.links,
                  activeTab === 'wishlist' && styles.linkActive
                ]}
                onPress={() => setActiveTab('wishlist')}
              >
                <Feather name="heart" size={20} color={activeTab === 'wishlist' ? "#FFFFFF" : "#004BFE"} />
              </Pressable>
              <Pressable 
                style={[
                  styles.links,
                  activeTab === 'cart' && styles.linkActive
                ]}
                onPress={() => setActiveTab('cart')}
              >
                <Feather name="shopping-bag" size={20} color={activeTab === 'cart' ? "#FFFFFF" : "#004BFE"} />
              </Pressable>
              <Pressable 
                style={[
                  styles.links,
                  activeTab === 'notifications' && styles.linkActive
                ]}
                onPress={() => setActiveTab('notifications')}
              >
                <Feather name="bell" size={20} color={activeTab === 'notifications' ? "#FFFFFF" : "#004BFE"} />
              </Pressable>
            </View>
          </View>
          <Text style={styles.name}>Hello, Romina!</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {renderContent()}
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

  // VOUCHERS STYLING 
  rewards: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  progress: {
    color: "#999999",
    fontSize: 16,
    fontFamily: "Raleway_500Medium",
  },
  progressActive: {
    color: "#0042E0",
  },
  press: {
    paddingHorizontal: 20,
    backgroundColor: "#F8F8F8",
    paddingVertical: 10,
    borderRadius: 26
  },
  pressActive: {
    backgroundColor: "#E5EBFC",
  },

  // Voucher Card Styles
  voucherCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#0042E0",
    padding: 16,
    marginBottom: 16,
    position: 'relative',
    overflow: 'visible',
  },
  notchLeft: {
    position: 'absolute',
    left: -10,
    top: '50%',
    marginTop: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0042E0',
    borderLeftWidth: 0,
  },
  notchRight: {
    position: 'absolute',
    right: -10,
    top: '50%',
    marginTop: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0042E0',
    borderRightWidth: 0,
  },
  voucherHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  voucherTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  voucherTitle: {
    color: "#0042E0",
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
  },
  voucherDate: {
    color: "#666666",
    fontSize: 11,
    fontFamily: "Raleway_500Medium",
  },
  dashedDivider: {
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#0042E0',
    marginBottom: 12,
  },
  voucherContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  voucherInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E5EBFC",
    justifyContent: "center",
    alignItems: "center",
  },
  voucherTextContainer: {
    flex: 1,
  },
  voucherMainText: {
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
    color: "#202020",
    marginBottom: 4,
  },
  voucherSubText: {
    fontSize: 12,
    fontFamily: "Raleway_500Medium",
    color: "#666666",
  },
  collectedButton: {
    backgroundColor: "#0042E0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  collectedButtonText: {
    color: "#FFFFFF",
    fontFamily: "Raleway_600SemiBold",
    fontSize: 14,
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  active: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flex: 1,
    alignItems: "center"
  },
  activity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  profileImageContainer: {
    width: 50, 
    height: 50, 
    display: "flex", 
    justifyContent: "center", 
    backgroundColor: "#ffffff",
    alignItems: "center", 
    borderRadius: 25, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },
  profileImage: {
    width: 40, 
    height: 40, 
    borderRadius: 20
  },
  activityButton: {
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 26
  },
  text: {
    color: "#ffffff",
  },
  activityButtonActive: {
    backgroundColor: "#0042E0",
  },
  act: {
    color: "#0042e0",
    fontFamily: "Raleway_500Medium",
    fontSize: 16,
  },
  links: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#F8F8F8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  linkActive: {
    backgroundColor: "#0042E0",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8
  },
  name: {
    color: "#202020",
    fontSize: 28,
    fontFamily: "Raleway_700Bold",
    marginTop: 10,
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
    backgroundColor: "#E5EBFC",
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
  tabContent: {
    flex: 1,
  },
  tabIcon: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
  },
  tabTitle: {
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
    color: "#202020",
    marginBottom: 6,
    textAlign: "center",
  },
  tabDescription: {
    fontSize: 12,
    fontFamily: "Raleway_500Medium",
    color: "#666666",
    textAlign: "center",
  },
  emptyState: {
    alignItems: "center",
    gap: 20,
    marginTop: 40,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: "Raleway_500Medium",
    color: "#999999",
  },
  browseButton: {
    backgroundColor: "#0042E0",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 26,
  },
  browseButtonText: {
    color: "#ffffff",
    fontFamily: "Raleway_600SemiBold",
    fontSize: 16,
  },
});