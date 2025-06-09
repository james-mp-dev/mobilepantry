import { StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function LaunchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mobile Pantry</Text>

      <Link href={{ pathname: "./about" }} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </Pressable>
      </Link>

      <Link href={{ pathname: "/login" }} asChild>
        <Pressable style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>

      <Link href={{ pathname: "/sign-up" }} asChild>
        <Pressable style={[styles.button, styles.signupButton]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", // A light background color
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8, // Rounded corners
    elevation: 3,
    backgroundColor: "#007AFF", // A standard blue color
    width: "80%",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#4CAF50", // Green color for login
  },
  signupButton: {
    backgroundColor: "#FF9500", // Orange color for sign up
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
