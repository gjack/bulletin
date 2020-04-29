import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.viewStyles}>
      <Feather name="search" style={styles.iconStyles} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    height: 50,
    backgroundColor: "#F0EEEE",
    margin: 25,
    borderRadius: 5,
    flexDirection: "row",
  },
  iconStyles: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  textInputStyles: {
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
