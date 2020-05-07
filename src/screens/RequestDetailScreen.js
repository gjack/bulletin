import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

import { Context as NeedContext } from "../context/NeedContext";

const RequestDetailScreen = ({ navigation }) => {
  const needId = navigation.getParam("_id");
  const { state } = useContext(NeedContext);
  const need = state.needs.find((n) => n.id === needId);
  return (
    <View>
      <Text h3>{need.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RequestDetailScreen;
