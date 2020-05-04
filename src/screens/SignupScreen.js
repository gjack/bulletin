import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up for Bulletin</Text>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input
        label="Email"
        placeholder="email@address.com"
        leftIcon={
          <FontAwesome
            name="envelope"
            style={{ fontSize: 25, marginRight: 10 }}
          />
        }
      />
      <Input
        label="Password"
        placeholder="your password"
        leftIcon={
          <FontAwesome name="lock" style={{ fontSize: 25, marginRight: 10 }} />
        }
      />
      <Input
        label="Password Confirmation"
        placeholder="confirm your password"
        leftIcon={
          <FontAwesome name="lock" style={{ fontSize: 25, marginRight: 10 }} />
        }
      />
      <Button title="Sign Up" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
