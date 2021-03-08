import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Progress from "react-native-progress";
import { Modal } from "react-native";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress % 100}
            width={200}
            color={colors.primary}
          />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
