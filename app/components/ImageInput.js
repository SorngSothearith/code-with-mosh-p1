import React, { useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Screen from "./Screen";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
function ImageInput({ imageUri = null, onChangeImage }) {
  const requestPermissionCamera = async () => {
    const result = Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) return alert("please allow permission");
  };
  useEffect(() => {
    requestPermissionCamera();
  }, []);
  const selectImage = async () => {
    // console.log("select image");
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        return onChangeImage(result.uri);
      }
    } catch (e) {
      console.log("error read  image");
    }
  };
  const deleteImage = () => {
    // alert("delete this image");
    Alert.alert("Delete", "Are you sure to  delete this image?", [
      {
        text: "Ok",
        onPress: () => onChangeImage(null),
        style: "cancel",
      },
      { text: "No" },
    ]);
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <TouchableWithoutFeedback onPress={deleteImage}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          style={styles.cameraInput}
          onPress={selectImage}
        >
          <Entypo name="camera" size={24} color="black" />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  cameraInput: {
    padding: 20,
    backgroundColor: colors.light,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

export default ImageInput;
