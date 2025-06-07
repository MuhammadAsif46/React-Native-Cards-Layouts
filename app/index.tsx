import FlatCard from "@/components/FlatCard";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
