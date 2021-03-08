import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && !netInfo.isInternetReachable) {
    return (
      <View style={styles.container}>
        <AppText style={styles.offlineText}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
  },
  offlineText: {
    color: colors.white,
    fontSize: 15,
  },
});

export default OfflineNotice;
