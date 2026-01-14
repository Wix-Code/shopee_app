import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPassword() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        {/* Decorative Images */}
        <View style={styles.top}>
          <Image source={require("../assets/images/b.png")} />
          <Image style={styles.pic} source={require("../assets/images/b1.png")} />
        </View>
        
        {/* Main Content */}
        <View style={styles.content}>
          <View style={styles.profileImage}>
            <Image style={styles.img} source={require("../assets/images/image.png")} />
          </View>
          
          <Text style={styles.title}>Setup New Password</Text>
          <Text style={styles.subtitle}>
            Please, setup a new password for{"\n"}your account
          </Text>
          
          <TextInput 
            style={styles.input} 
            placeholder='New Password'
            placeholderTextColor="#999999"
            secureTextEntry
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input} 
            placeholder='Repeat Password'
            placeholderTextColor="#999999"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        {/* Fixed Bottom Section */}
        <View style={styles.bottomSection}>
          <Link href="/ready-card" asChild>
            <Pressable style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Save</Text>
            </Pressable>
          </Link>
          <Link href="/" asChild>
            <Pressable style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
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
    marginTop: -140,
  },
  pic: {
    position: "absolute",
  },
  content: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 106,
    height: 106,
    borderRadius: 53,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
  },
  img: {
    width: 92,
    height: 92,
    borderRadius: 46,
  },
  title: {
    color: "#202020",
    fontSize: 24,
    fontFamily: "Raleway_700Bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    color: "#666666",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Raleway_400Regular",
    marginBottom: 10,
    lineHeight: 22,
  },
  input: {
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    fontFamily: "Raleway_400Regular",
    color: "#202020",
  },
  bottomSection: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    gap: 12,
  },
  nextButton: {
    backgroundColor: "#0042FF",
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  nextButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Raleway_600SemiBold",
  },
  cancelButton: {
    paddingVertical: 8,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#202020",
    fontSize: 15,
    fontFamily: "Raleway_400Regular",
  },
});