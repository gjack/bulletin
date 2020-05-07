import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Input, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

const RequestCreateScreen = () => {
  return (
    <SafeAreaView>
      <Card
        title={
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <Text h4>Request an item or service</Text>
          </View>
        }
      >
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
