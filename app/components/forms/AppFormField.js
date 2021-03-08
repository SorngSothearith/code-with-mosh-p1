import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppTextInput, ErrorMessage } from "../forms";
import { useFormikContext } from "formik";

export default function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched,values } = useFormikContext();
  return (
    <>
      <AppTextInput
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name,text)}
        value={()=>{values[name]}}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
