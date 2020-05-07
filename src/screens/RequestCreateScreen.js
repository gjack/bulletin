import React, { useContext } from "react";
import { View, StyleSheet, Picker } from "react-native";
import { Text, Card, Input, Button } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { Context as OrganizationContext } from "../context/OrganizationContext";

const RequestCreateScreen = () => {
  const { state, fetchOrganizations } = useContext(OrganizationContext);
  return (
    <SafeAreaView>
      <NavigationEvents onWillFocus={fetchOrganizations} />
      <Card
        title={
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <Text h4>Request an item or service</Text>
          </View>
        }
      >
        <Picker>
          <Picker.Item label="First" value={1} />
        </Picker>
        <Input label="Title" placeholder="A title for your request" />
        <Input
          label="Description"
          placeholder="A description of your needs"
          multiline
          textAlignVertical={"top"}
        />
        <View>
          <Button title="Done" />
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RequestCreateScreen;
