import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>🙃</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    // gap: 10,
    marginRight: 6,
  },
  cardElevated: {
    backgroundColor: "#ecf39e",
    // elevation: 5,
  },
  cardText: {
    color: "#344e41",
    fontSize: 18,
    fontWeight: "500",
  },
});
