import React, { useContext, useState } from "react";
import { View, StyleSheet, Picker } from "react-native";
import { Text, Card, Input, Button } from "react-native-elements";
import { NavigationEvents, SafeAreaView } from "react-navigation";
import { Context as OrganizationContext } from "../context/OrganizationContext";
import { Context as NeedContext } from "../context/NeedContext";

const RequestCreateScreen = () => {
  const { state, fetchOrganizations } = useContext(OrganizationContext);
  const { createNeed } = useContext(NeedContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [organizationId, setOrganizationId] = useState(null);

  return (
    <SafeAreaView>
      <NavigationEvents
        onWillFocus={() => {
          fetchOrganizations();
          setTitle("");
          setDescription("");
          setOrganizationId(null);
        }}
      />
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
            <Picker.Item
              label={organization.name}
              value={organization.id}
              key={`org${organization.id}`}
            />
          ))}
        </Picker>
        <Input
          label="Title"
          placeholder="A title for your request"
          onChangeText={setTitle}
          value={title}
        />
        <Input
          label="Description"
          placeholder="A description of your needs"
          multiline
          textAlignVertical={"top"}
          onChangeText={setDescription}
          value={description}
        />
        <View>
          <Button
            title="Done"
            onPress={() => createNeed({ title, description, organizationId })}
          />
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RequestCreateScreen;
