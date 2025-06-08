// packages/ui/index.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  // Use the 'style' prop to apply styles from our StyleSheet object
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

// Define all styles for the component in one place using the built-in API
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    width: "90%",
    backgroundColor: "#f9f9f9",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
});
