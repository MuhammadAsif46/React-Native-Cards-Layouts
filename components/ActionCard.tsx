import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 22 - ES13
          </Text>
        </View>
        <Image
          source={{
            uri: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm255wzc0140b7k3z7sj4.png",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                "https://dev.to/mdawooddev/10-must-know-javascript-es13-features-for-modern-development-3go3"
              )
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://github.com/muhammadasif46")}
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
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
    marginHorizontal: "auto",
    borderRadius: 6,
    // overflow: "hidden", // To ensure the image doesn't overflow the card
    width: 340,
    height: 380,
  },
  elevatedCard: {
    elevation: 3, // For Android
    backgroundColor: "#a3b18a",
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center",
  },
  socialLinks: {
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
  },
  bodyText: {
    color: "#fff",
    paddingHorizontal: 8,
  },
});
