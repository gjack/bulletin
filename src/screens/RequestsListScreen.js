import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { Context as NeedContext } from "../context/NeedContext";

const RequestsListScreen = ({ navigation }) => {
  const { state, fetchNeeds } = useContext(NeedContext);

  useEffect(() => {
    fetchNeeds();
  }, []);

  return (
    <View>
      <Text h3>Needed</Text>
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

const styles = StyleSheet.create({});

export default RequestsListScreen;
