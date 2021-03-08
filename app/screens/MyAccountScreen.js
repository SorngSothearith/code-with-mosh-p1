import React,{useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { FlatList } from "react-native-gesture-handler";
import AuthContext from '../auth/context';
import authStorage from '../auth/storage'
export default function MyAccountScreen({navigation}) {
  const {user,setUser}= useContext(AuthContext);

  const handleLogout = async () => {
    setUser(null)
    return await authStorage.removeToken()
  }


  const menuItem = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: "primary",
      },
      target:''
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: "secondary",
      },
      target:'Messages'
    },
    
  ];
  return (
    <Screen style={styles.screen}>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={user.name}
        subTitle={user.email}
        style={styles.profileCard}
        onPress={() => console.log("kkk")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(item,key)=>key.toString()}
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
              onPress={()=>navigation.navigate(item.target)}
            />
          )}
        ></FlatList>
      </View>
        <ListItem
          onPress={handleLogout}
          title="Logout"
          IconComponent={<Icon name="logout" backgroundColor="yellow" 
          />}
        />
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
