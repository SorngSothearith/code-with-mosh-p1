import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import {
  AppFormField,
  AppForm,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import * as Yup from "yup";
import authApi from "../api/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from '../auth/storage'

export default function LoginScreen(props) {
  const authContext = useContext(AuthContext);
console.log('mimi',authContext)
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(4).label("password"),
  });

  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user)
    await authStorage.storeToken(result.data)
  };
  return (
    <Screen style={styles.container}>
      <View>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email or password" visible={loginFailed} />
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
