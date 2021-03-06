import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <AppButton title={title} onPress={handleSubmit} color={color}></AppButton>
    </>
  );
}
