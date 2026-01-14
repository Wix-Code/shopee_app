import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReadyCard() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Decorative Images */}
        <View style={styles.top}>
          <Image source={require("../assets/images/b.png")} />
          <Image style={styles.pic} source={require("../assets/images/b1.png")} />
        </View>
        
        {/* Card */}
        <View style={styles.cards}>
          <View style={styles.card}>
            <Image style={styles.img} source={require("../assets/images/ban.png")} />
            <View style={styles.cardContent}>
              <Text style={styles.head}>Hello</Text>
              <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.</Text>
              <Pressable style={styles.press}>
                <Link href="/(tabs)">
                  <Text style={styles.start}>Let's Start</Text>
                </Link>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FF",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  top: {
    position: "absolute",
    top: -140,
    left: 0,
    right: 0,
  },
  pic: {
    position: "absolute",
  },
  cards: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    height: 614,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.11,
    // shadowRadius: 6,
    //elevation: 3,
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  cardContent: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  head: {
    color: "#202020",
    fontSize: 28,
    fontFamily: "Raleway_700Bold",
    textAlign: "center",
    marginBottom: 20,
  },
  para: {
    color: "#666666",
    fontSize: 16,
    fontFamily: "Raleway_400Regular",
    textAlign: "center",
    lineHeight: 24,
  },
  press: {
    backgroundColor: "#004CFF",
    paddingVertical: 10,
    borderRadius: 16,
    width: 200,
    marginTop: 20
  },
  start: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Raleway_400Regular",
    textAlign: "center",
  }
});