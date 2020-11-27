import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { FlatList } from "react-native-gesture-handler";
export default function MyAccountScreen() {
  const menuItem = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: "primary",
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: "secondary",
      },
    },
  ];
  return (
    <Screen style={styles.screen}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Sorng Sothearith"
        subTitle="sorngsothearith@gmail.com"
        style={styles.profileCard}
        onPress={() => console.log("kkk")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              style={{ backgroundColor: "white" }}
            />
          )}
        ></FlatList>
      </View>
      <View>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="yellow" />}
        />
      </View>
      {/* <ListItem
        // image={require("../assets/mosh.jpg")}
        IconComponent={
          <Icon
            backgroundColor="danger"
            name="email"
            size={50}
            iconColor="white"
          />
        }
        title="Sorng Sothearith"
        // subTitle="sorngsothearith@gmail.com"
        style={styles.profileCard}
        onPress={() => console.log("kkk")}
      /> */}
      {/* <Icon backgroundColor="danger" name="email" size={100} iconColor="white" /> */}
      {/* <ListItem
        image={require("../assets/mosh.jpg")}
        title="Sorng Sothearith"
        subTitle="sorngsothearith@gmail.com"
        style={styles.profileCard}
        onPress={() => console.log("kkk")}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
  profileCard: {
    backgroundColor: colors.white,
  },
});
