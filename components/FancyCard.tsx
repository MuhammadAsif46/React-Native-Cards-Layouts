import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOz4I0qRMfuE_haWHaqezrXEOEYJ49zOeTzg&s",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Mohatta Palace</Text>
          <Text style={styles.cardLabel}>Karachi City</Text>
          <Text style={styles.cardDescription}>
            Mohatta Palace is a historical palace located in Clifton, Karachi,
            Pakistan, now serving as a museum and cultural center.
          </Text>
          <Text style={styles.cardFooter}>20 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 'auto',
    borderRadius: 6,
    elevation: 3, // For Android
    overflow: "hidden", // To ensure the image doesn't overflow the card
    width: 340,
    height: 380,
  },
  cardElevated: {
    backgroundColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 8,
    // borderRadius: 8,
    // objectFit: "cover",
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 12,
    color:"#6c757d"
  },
  cardFooter: {},
});
