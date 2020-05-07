import React, { useContext, useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as NeedContext } from "../context/NeedContext";

import SearchBar from "../components/SearchBar";

const RequestsListScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { state, fetchNeeds } = useContext(NeedContext);

  return (
    <View>
      <NavigationEvents onWillFocus={fetchNeeds} />
      <Text h3>Needed</Text>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => fetchNeeds({ searchTerm })}
      />
      <FlatList
        data={state.needs}
        keyExtractor={(need) => `Need#${need.id}`}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.organization.name}
            onPress={() =>
              navigation.navigate("RequestDetail", { _id: item.id })
            }
            bottomDivider
            chevron
          />
        )}
      />
    </View>
  );
};

RequestsListScreen.navigationOptions = {
  title: "Needs",
};

const styles = StyleSheet.create({});

export default RequestsListScreen;
