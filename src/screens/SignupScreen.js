import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <View style={styles.containerStyles}>
      <Text h3>Sign Up for Bulletin</Text>
      <Input
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        autoCorrect={false}
      />
      <Input
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        autoCorrect={false}
      />
      <Input
        label="Your email address"
        placeholder="email@address.com"
        leftIcon={<FontAwesome name="envelope" style={styles.iconStyles} />}
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        label="Password"
        placeholder="Password"
        leftIcon={<FontAwesome name="lock" style={styles.iconStyles} />}
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      <Input
        label="Password Confirmation"
        placeholder="confirm your password"
        leftIcon={<FontAwesome name="lock" style={styles.iconStyles} />}
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
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
