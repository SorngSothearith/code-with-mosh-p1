import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import listingApi from "../api/listings";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from "../hooks/useApi";

export default function ListingScreen({ navigation }) {
  const getListings = useApi(listingApi.getListings)
  console.log('data',getListings.data)
  useEffect(() => {
    getListings.request();
  }, []);
  return (
    <Screen style={styles.screen}>
      {getListings.error && (
        <>
          <AppText>Couldn't retrieve the listing</AppText>
          <AppButton
            title="load listing"
            color="primary"
            onPress={loadListing}
          />
        </>
      )}
      <ActivityIndicator visible={getListings.loading}/>
      <FlatList
        data={getListings.data}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            price={item.price}
            image={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          ></AppCard>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
