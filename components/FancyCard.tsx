import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOz4I0qRMfuE_haWHaqezrXEOEYJ49zOeTzg&s"
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
  card: {},
  cardElevated: {},
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    objectFit: "cover",
  },
  cardBody:{},
  cardTitle:{},
  cardLabel:{},
  cardDescription:{},
  cardFooter:{}
});
