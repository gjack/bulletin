import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text h3>Account</Text>
      <Button title="Sign Out" onPress={signOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
