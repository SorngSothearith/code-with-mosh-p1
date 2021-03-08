import React from "react";
import { ErrorMessage } from ".";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
function FormImagePicker({ name }) {
  const {
    errors,
    touched,
    handleChange,
    setFieldValue,
    numColumns,
    values,
  } = useFormikContext();
  const imageUris = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((item) => item != uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
