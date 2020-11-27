import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AppForm,
  AppTextInput,
  SubmitButton,
  AppFormPicker,
  AppFormField,
} from "../components/forms";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Yup from "yup";
const categories = [
  {
    label: "Funiture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];
export default function ListingEditScreen() {
  const [category, setCategory] = useState(categories[0]);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(4).label("title"),
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(4).label("password"),
  });
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          placeholder="Name"
          name="name"
        />
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          placeholder="Email"
          name="email"
          keyboardType="email-address"
        />
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          placeholder="Password"
          name="password"
          secureTextEntry
        />
        <SubmitButton title="Register" color="primary"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
