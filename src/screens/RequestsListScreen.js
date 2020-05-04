import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const RequestsListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 40 }}>RequestsListScreen</Text>
      <Button
        title="Go to Request Detail"
        onPress={() => navigation.navigate("RequestDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default RequestsListScreen;
