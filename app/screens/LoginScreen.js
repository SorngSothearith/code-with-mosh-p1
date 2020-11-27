import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";
import * as Yup from "yup";

export default function LoginScreen() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(4).label("password"),
  });
  return (
    <Screen style={styles.container}>
      <View>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="password"
          textContentType="password"
          secureTextEntry
          name="password"
        />
        <SubmitButton title="Login" color="primary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
