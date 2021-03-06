import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import defaultStyles from "../../config/styles";
import { useFormikContext } from 'formik';
export default function AppTextInput({
  icon,
  name,
  width = "100%",
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched,values } = useFormikContext();
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
        onBlur={()=>setFieldTouched(name)}
        onChangeText={(text)=>setFieldValue(name,text)}
        value={values[name]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    borderRadius: 25,
    padding: 20,
    marginVertical: 10,
  },
  textInput: {
    color: defaultStyles.colors.dark,
    fontSize: 20,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
  },
  icon: {
    marginRight: 10,
  },
});
