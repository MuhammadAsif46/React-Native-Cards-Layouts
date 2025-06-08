import ElevatedCards from "@/components/ElevatedCards";
import FancyCard from "@/components/FancyCard";
import FlatCard from "@/components/FlatCard";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
