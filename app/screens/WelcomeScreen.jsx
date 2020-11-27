import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from '../components/AppButton'
import colors from '../config/colors'
export default function WelcomeScreen({ logo, title }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.logoTitle}>{title}</Text>
      </View>
      <View style={styles.groupButton}>
        {/* <View style={styles.loginButton}></View> */}
        <AppButton title="Login" style={styles.logoContainer} color="primary"/>
        <AppButton title="Register" style={styles.logoContainer} color="secondary"/>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    top: 60,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoTitle: {
    fontSize:25,
    paddingVertical: 10,
  },
  groupButton: {
    padding:20,
    width:'100%'
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 70,
  }
});
