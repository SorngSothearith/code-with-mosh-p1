import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Icon({
  name,
  size = 40,
  backgroundColor,
  iconColor = "white",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: colors[backgroundColor],
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        style={styles.icon}
        name={name}
        size={size * 0.5}
        color={colors[iconColor]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: backgroundColor,
  },
});
