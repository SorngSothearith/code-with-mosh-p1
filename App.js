import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Screen from "./app/components/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Go to Tweet"
      onPress={() => navigation.navigate("TweetDetail")}
    />
  );
};
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweet</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetail", { id: 12 })}
    ></Button>
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
);
const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tweets"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      })}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetail"
        component={TweetDetails}
        options={({ route }) => ({
          title: `Tweet Detail id : ${route.params.id}`,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};
export default function App() {
  const [isReady, SetIsReady] = useState(false);
  const [user, setUser] = useState();
  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => SetIsReady(true)} />
    );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
