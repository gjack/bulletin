import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
        onSearchTermSubmit={() => console.log("submitted")}
      />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
