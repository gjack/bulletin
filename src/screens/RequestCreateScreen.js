import React, { useContext, useState } from "react";
import { View, StyleSheet, Picker } from "react-native";
import { Text, Card, Input, Button } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { Context as OrganizationContext } from "../context/OrganizationContext";

const RequestCreateScreen = () => {
  const { state, fetchOrganizations } = useContext(OrganizationContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [organizationId, setOrganizationId] = useState(
    state.organizations[0].id
  );
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
        <Picker
          selectedValue={organizationId}
          onValueChange={(itemValue, itemIndex) => setOrganizationId(itemValue)}
        >
          {state.organizations.map((organization) => (
            <Picker.Item label={organization.name} value={organization.id} />
          ))}
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
