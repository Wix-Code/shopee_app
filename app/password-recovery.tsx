import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PasswordRecovery() {
  const [selectedOption, setSelectedOption] = useState<"email" | "sms">("sms");

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
          
          <Text style={styles.title}>Password Recovery</Text>
          <Text style={styles.subtitle}>
            How you would like to restore{'\n'}your password?
          </Text>
          
          <View style={styles.optionsContainer}>
            <Pressable 
              style={[
                styles.option,
                selectedOption === "sms" && styles.optionSelected
              ]}
              onPress={() => setSelectedOption("sms")}
            >
              <Text style={[
                styles.optionText,
                selectedOption === "sms" && styles.optionTextSelected
              ]}>
                SMS
              </Text>
              <View style={[
                styles.checkbox,
                selectedOption === "sms" ? styles.checkboxSelected : styles.checkboxUnselected
              ]}>
                {selectedOption === "sms" && (
                  <FontAwesome5 name="check" size={12} color="white" />
                )}
              </View>
            </Pressable>

            <Pressable 
              style={[
                styles.option,
                selectedOption === "email" && styles.optionSelected
              ]}
              onPress={() => setSelectedOption("email")}
            >
              <Text style={[
                styles.optionText,
                selectedOption === "email" && styles.optionTextSelected
              ]}>
                Email
              </Text>
              <View style={[
                styles.checkbox,
                selectedOption === "email" ? styles.checkboxSelected : styles.checkboxUnselected
              ]}>
                {selectedOption === "email" && (
                  <FontAwesome5 name="check" size={12} color="white" />
                )}
              </View>
            </Pressable>
          </View>
        </View>

        {/* Fixed Bottom Section */}
        <View style={styles.bottomSection}>
          <Link href="/password-recovery-code" asChild>
            <Pressable style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
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
    backgroundColor: "#F5F7FF",
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
    justifyContent: "center",
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
    marginBottom: 32,
    lineHeight: 22,
  },
  optionsContainer: {
    gap: 12,
    width: "100%",
    maxWidth: 240,
  },
  option: {
    backgroundColor: "#FFEBEB",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  optionSelected: {
    backgroundColor: "#E5EBFC",
  },
  optionText: {
    color: "#666666",
    fontSize: 15,
    fontFamily: "Raleway_500Medium",
  },
  optionTextSelected: {
    color: "#0042FF",
    fontFamily: "Raleway_700Bold",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#ffffff",
    position: "absolute",
    right: 16,
  },
  checkboxSelected: {
    backgroundColor: "#0042FF",
  },
  checkboxUnselected: {
    backgroundColor: "#F8CECE",
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