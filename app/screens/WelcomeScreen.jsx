import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from '../components/AppButton'
import colors from '../config/colors'
export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo}></Image>
        <Text style={styles.logoTitle}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.groupButton}>
        {/* <View style={styles.loginButton}></View> */}
        <AppButton title="Login" style={styles.logoContainer} color="primary" onPress={()=>navigation.navigate('Login')}/>
        <AppButton title="Register" style={styles.logoContainer} color="secondary" onPress={()=>navigation.navigate('Register')}/>
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
