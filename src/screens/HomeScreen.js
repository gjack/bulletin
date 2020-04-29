import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
