import React from "react";
import { DefaultTheme } from "@react-navigation/native";

import colors from "../config/colors";

const myTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: colors.primary },
  backgroundColor:colors.white
};
export default myTheme;