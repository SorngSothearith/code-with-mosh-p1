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
import CategoryPickerItem from "../components/CategoryPickerItem";
const categories = [
  {
    label: "Funiture",
    value: 1,
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: 2,
    icon: "email",
    backgroundColor: "green",
  },
  {
    label: "Cameras",
    value: 3,
    icon: "lock",
    backgroundColor: "blue",
  },
];
export default function ListingEditScreen() {
  const [category, setCategory] = useState(categories[0]);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("title"),
    price: Yup.number().max(10000).required().label("price"),
    category: Yup.object().nullable().label("category"),
  });
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          placeholder="Title"
          maxLength={255}
          name="title"
        />
        <AppFormField
          autoCapialize="none"
          autoCorrect={false}
          placeholder="Price"
          maxLength={8}
          name="price"
          width="40%"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          placeholder="Category"
          style={{ color: "red" }}
          width="50%"
        />
        <AppTextInput
          placeholder="Description"
          multiline
          numberOfLine={3}
          name="description"
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
