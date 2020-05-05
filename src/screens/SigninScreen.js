import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

import AuthForm from "../components/AuthForm";

const SigninScreen = ({ navigation }) => {
  const { state, signIn } = useContext(AuthContext);

  return (
    <View style={styles.containerStyles}>
      <Text h3>Sign In to Bulletin</Text>
      <AuthForm
        submitText="Sign In"
        errorMessage={state.errorMessage}
        registration={false}
        onSubmit={signIn}
      />
      <Button
        title="Don't have an account? Sign Up instead!"
        type="clear"
        onPress={() => navigation.navigate("Signup")}
        buttonStyle={{ marginTop: 15 }}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
