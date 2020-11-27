import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AppCard() {
  return (
    <View style={styles.card}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.subTitle}>100$</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 10,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 20,
  },
  detailContainer: {
    padding: 20,
  },
});
