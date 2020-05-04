import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 40 }}>SignupScreen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to mainFlow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
