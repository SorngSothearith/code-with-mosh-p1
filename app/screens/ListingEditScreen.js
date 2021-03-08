import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AppForm,
  AppTextInput,
  SubmitButton,
  AppFormPicker,
  AppFormField,
} from "../components/forms";
import Screen from "../components/Screen";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";
const categories = [
  {
    label: "Funiture",
    value: 1,
    backgroundColor: "danger",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: 2,
    icon: "email",
    backgroundColor: "medium",
  },
  {
    label: "Cameras",
    value: 3,
    icon: "lock",
    backgroundColor: "yellow",
  },
];
export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible,setUploadVisible] = useState(false);
  const [progress,setProgress] = useState(0);
  const handleSubmit = async (listing,{resetForm}) => {
    setUploadVisible(true);
    setProgress(0);
    const result = await listingsApi.addListing({...listing,location},(progress)=>{
      setProgress(progress)
    })
    if(!result.ok){
      setUploadVisible(false)
      return alert("could\'n post to sever")
    }
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(4).label("title"),
    price: Yup.number().max(10000).required().label("price"),
    category: Yup.object().nullable().label("category"),
    images: Yup.array().min(1, "Please select at least 1 image"),
  });
  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={()=>{setUploadVisible(false)}} visible={uploadVisible} progress={progress}/>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />
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
        <SubmitButton title="Post" color="primary"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
