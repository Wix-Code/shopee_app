import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Main Content - Centered */}
        <View style={styles.content}>
          <View style={styles.image}>
            <Image source={require("../assets/images/logo.png")} />
          </View>
          <Text style={styles.shop}>Shoppee</Text>
          <Text style={styles.store}>Beautiful eCommerce UI Kit{'\n'}for your online store</Text>
        </View>

        {/* Fixed Bottom Section */}
        <View style={styles.bottomSection}>
          <Link href="/create-account" asChild>
            <View style={styles.start}>
              <Text style={styles.text}>Let's get started</Text>
            </View>
          </Link>
          <Link href="/login" asChild>
            <View style={styles.loginLink}>
              <Text style={styles.acc}>I already have an account</Text>
              <View></View>
            </View>
          </Link>
        </View>
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
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 134,
    height: 134,
    borderRadius: 67,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  shop: {
    color: "#202020",
    fontSize: 48,
    fontFamily: "Raleway_700Bold",
    marginTop: 30,
    marginBottom: 16,
  },
  store: {
    color: "#666666",
    fontSize: 16,
    fontFamily: "Raleway_400Regular",
    textAlign: "center",
    lineHeight: 24,
  },
  bottomSection: {
    paddingBottom: 20,
    gap: 16,
  },
  start: {
    backgroundColor: "#004CFF",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
  loginLink: {
    paddingVertical: 12,
    alignItems: "center",
  },
  acc: {
    color: "#004CFF",
    fontSize: 15,
    fontFamily: "Raleway_500Medium",
  },
});