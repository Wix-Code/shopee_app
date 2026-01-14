import Octicons from '@expo/vector-icons/Octicons';
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Decorative Images */}
        <View style={styles.top}>
          <Image source={require("../assets/images/b.png")} />
          <Image style={styles.pic} source={require("../assets/images/b1.png")} />
        </View>
        <View style={styles.right}>
          <Image source={require("../assets/images/b2.png")} />
        </View>
        
        {/* Main Content */}
        <View style={styles.content}>
          <Text style={styles.shop}>Login</Text>
          <View style={styles.greetingRow}>
            <Text style={styles.store}>Good to see you back! </Text>
            <Octicons name="heart-fill" size={16} color="#202020" />
          </View>
          <TextInput 
            style={styles.input} 
            placeholder='Email'
            placeholderTextColor="#999999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Fixed Bottom Section */}
        <View style={styles.bottomSection}>
          <Link href="/create-account" asChild>
            <Pressable style={styles.start}>
              <Text style={styles.text}>Next</Text>
            </Pressable>
          </Link>
          <Link href="/password-recovery" asChild>
            <Pressable style={styles.loginLink}>
              <Text style={styles.acc}>Cancel</Text>
            </Pressable>
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
    justifyContent: "space-between",
  },
  top: {
    position: "relative",
  },
  pic: {
    position: "absolute",
  },
  right: {
    position: "absolute",
    top: 100,
    right: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  shop: {
    color: "#202020",
    fontSize: 52,
    fontFamily: "Raleway_700Bold",
    marginBottom: 8,
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  store: {
    color: "#202020",
    fontSize: 15,
    fontFamily: "Raleway_400Regular",
  },
  input: {
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: "100%",
    borderRadius: 30,
    fontSize: 16,
    fontFamily: "Raleway_400Regular",
    color: "#202020",
  },
  bottomSection: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    gap: 12,
  },
  start: {
    backgroundColor: "#0042FF",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
  loginLink: {
    paddingVertical: 8,
    alignItems: "center",
  },
  acc: {
    color: "#202020",
    fontSize: 15,
    fontFamily: "Raleway_400Regular",
  },
});