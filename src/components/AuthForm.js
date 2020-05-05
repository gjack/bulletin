import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const AuthForm = ({
  errorMessage,
  registration = false,
  submitText,
  onSubmit,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <>
      {registration ? (
        <>
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
        </>
      ) : null}
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
      {registration ? (
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
      ) : null}
      {errorMessage ? (
        <Text style={styles.errorStyles}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitText}
        onPress={() =>
          onSubmit({
            email,
            password,
            ...(registration && { passwordConfirmation, firstName, lastName }),
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  iconStyles: {
    fontSize: 25,
    marginRight: 10,
  },
  errorStyles: {
    fontSize: 18,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default AuthForm;
