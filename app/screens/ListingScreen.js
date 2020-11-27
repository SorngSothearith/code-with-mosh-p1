import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function ListingScreen() {
  const listing = [
    {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in greate condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
    },
  ];
  return (
    <Screen style={styles.screen}>
      <FlatList data={listing} renderItem={({ item }) => <AppCard></AppCard>} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
