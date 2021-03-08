import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ErrorMessage } from "../forms";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
export default function AppFormPicker({
  items,
  name,
  width = "100%",
  placeholder,
  PickerItemComponent,
  ...otherProp
}) {
  const {
    errors,
    touched,
    handleChange,
    setFieldValue,
    numColumns,
    values,
  } = useFormikContext();
  // console.log("AppFormPicker", items);
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        numColumns={numColumns}
        {...otherProp}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
