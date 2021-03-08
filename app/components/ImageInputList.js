import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./Screen";
import { Entypo } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import colors from "../config/colors";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef();
  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (!result.granted) return alert("you need to allow library");
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        onAddImage(result.uri);
      }
    } catch (e) {
      console.log("error read image", e);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput imageUri="" onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

export default ImageInputList;
