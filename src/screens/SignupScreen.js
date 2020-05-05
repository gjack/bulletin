import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

import { Context as AuthContext } from "../context/AuthContext";

import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.containerStyles}>
      <Text h3>Sign Up for Bulletin</Text>
      <AuthForm
        submitText="Sign Up"
        errorMessage={state.errorMessage}
        registration={true}
        onSubmit={signUp}
      />
      <Button
        title="Have an account? Go to Sign In"
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
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
