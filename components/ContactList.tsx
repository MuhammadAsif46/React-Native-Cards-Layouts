import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: "Muhammad Asif",
      status: "I ❤️ Code and Teach!",
      imageUrl: "https://avatars.githubusercontent.com/u/125912946?v=4",
    },
    {
      uid: 2,
      name: "Abdul Ahad",
      status: "Jush an extra ordinary teacher",
      imageUrl: "https://avatars.githubusercontent.com/u/120649081?s=130&v=4",
    },
    {
      uid: 3,
      name: "Aliyan Shaikh",
      status: "Gen-Ai and Chatbot Developer",
      imageUrl: "https://avatars.githubusercontent.com/u/119791226?s=130&v=4",
    },
    {
      uid: 4,
      name: "Muhammad Anus",
      status: "Professional UI/UX Designer",
      imageUrl: "https://avatars.githubusercontent.com/u/121577601?s=130&v=4",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
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
    paddingHorizontal: 14,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    padding: 8
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 12
  },
  userInfo: {},
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#000a'
  },
  userStatus: {
    fontSize: 12,
    color: "#415a77"
  },
});
