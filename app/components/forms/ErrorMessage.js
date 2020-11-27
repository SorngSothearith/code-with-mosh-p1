import React from "react";
import AppText from "../AppText";
import defaultStyle from "../../config/styles";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: defaultStyle.colors.danger,
  },
});
