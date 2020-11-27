import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
const initialMessages = [
  {
    id: 1,
    title:
      "Irure excepteur amet laboris non occaecat enim ea elit sunt. Sint veniam ex dolor pariatur aute aliqua nisi consequat. Veniam ullamco exercitation fugiat amet eiusmod deserunt magna consectetur et culpa sit eiusmod. Lorem mollit id occaecat proident consequat magna cillum elit excepteur excepteur anim consequat ullamco consequat.Irure excepteur amet laboris non occaecat enim ea elit sunt. Sint veniam ex dolor pariatur aute aliqua nisi consequat. Veniam ullamco exercitation fugiat amet eiusmod deserunt magna consectetur et culpa sit eiusmod. Lorem mollit id occaecat proident consequat magna cillum elit excepteur excepteur anim consequat ullamco consequat.Irure excepteur amet laboris non occaecat enim ea elit sunt. Sint veniam ex dolor pariatur aute aliqua nisi consequat. Veniam ullamco exercitation fugiat amet eiusmod deserunt magna consectetur et culpa sit eiusmod. Lorem mollit id occaecat proident consequat magna cillum elit excepteur excepteur anim consequat ullamco consequat.Irure excepteur amet laboris non occaecat enim ea elit sunt. Sint veniam ex dolor pariatur aute aliqua nisi consequat. Veniam ullamco exercitation fugiat amet eiusmod deserunt magna consectetur et culpa sit eiusmod. Lorem mollit id occaecat proident consequat magna cillum elit excepteur excepteur anim consequat ullamco consequat.Irure excepteur amet laboris non occaecat enim ea elit sunt. Sint veniam ex dolor pariatur aute aliqua nisi consequat. Veniam ullamco exercitation fugiat amet eiusmod deserunt magna consectetur et culpa sit eiusmod. Lorem mollit id occaecat proident consequat magna cillum elit excepteur excepteur anim consequat ullamco consequat.",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessage] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (messsage) => {
    const newMessages = messages.filter((item) => item.id != messsage.id);
    setMessage(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage(initialMessages);
        }}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("llllll")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
