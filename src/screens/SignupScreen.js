import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.containerStyles}>
      <Text h3>Sign Up for Bulletin</Text>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input
        label="Your email address"
        placeholder="email@address.com"
        leftIcon={<FontAwesome name="envelope" style={styles.iconStyles} />}
      />
      <Input
        label="Password"
        placeholder="Password"
        leftIcon={<FontAwesome name="lock" style={styles.iconStyles} />}
      />
      <Input
        label="Password Confirmation"
        placeholder="confirm your password"
        leftIcon={<FontAwesome name="lock" style={styles.iconStyles} />}
      />
      <Button title="Sign Up" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  iconStyles: {
    fontSize: 25,
    marginRight: 10,
  },
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
