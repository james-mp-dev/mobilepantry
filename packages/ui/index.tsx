// packages/ui/index.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  title: string;
}

export const Card = ({ title }: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginVertical: 8,
    width: "90%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
