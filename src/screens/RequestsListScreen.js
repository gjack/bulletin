import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as NeedContext } from "../context/NeedContext";

const RequestsListScreen = ({ navigation }) => {
  const { fetchNeeds } = useContext(NeedContext);
  return (
    <>
      <Text style={{ fontSize: 40 }}>RequestsListScreen</Text>
      <Button
        title="Go to Request Detail"
        onPress={() => navigation.navigate("RequestDetail")}
      />
      <Button title="Get List of Needs" onPress={fetchNeeds} />
    </>
  );
};

const styles = StyleSheet.create({});

export default RequestsListScreen;
