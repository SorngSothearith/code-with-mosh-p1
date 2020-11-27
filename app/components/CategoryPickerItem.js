import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryPickerItem({ item, onPress }) {
  console.log("kakskdkaskdkask", item.backgroundColor);
  return (
    <View style={styles.container}>
      <Icon backgroundColor="danger" name={item.icon} size={50}></Icon>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
  },
});
