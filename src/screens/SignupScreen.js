import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { state, signUp } = useContext(AuthContext);

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
      {state.errorMessage ? (
        <Text style={styles.errorStyles}>{state.errorMessage}</Text>
      ) : null}
      <Button
        title="Sign Up"
        onPress={() =>
          signUp({
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation,
          })
        }
      />
      <Button
        title="Hava an account? Go to Sign In"
        type="clear"
        onPress={() => navigation.navigate("Signin")}
        buttonStyle={{ marginTop: 15 }}
      />
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
  errorStyles: {
    fontSize: 18,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default SignupScreen;
