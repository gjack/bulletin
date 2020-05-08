import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon, Divider } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

import { Context as NeedContext } from "../context/NeedContext";
import { Context as AuthContext } from "../context/AuthContext";

const RequestDetailScreen = ({ navigation }) => {
  const needId = navigation.getParam("_id");
  const { state } = useContext(NeedContext);
  const { state: subscriberState } = useContext(AuthContext);
  const need = state.needs.find((n) => n.id === needId);

  return (
    <View>
      <Card
        title={
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text h4>{need.title}</Text>
            {subscriberState.id === need.author.id ? (
              <Icon
                name="edit"
                type="feather"
                color="black"
                containerStyle={styles.iconContainerStyles}
                iconStyle={styles.iconStyles}
              />
            ) : null}
          </View>
        }
      >
        <Text style={styles.descriptionStyles}>{need.description}</Text>
        <Divider style={{ marginTop: 15, marginBottom: 10 }} />
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="church"
            type="font-awesome-5"
            color="black"
            size={14}
            containerStyle={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 14 }}>{need.organization.name}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainerStyles: {
    borderRadius: 50,
    backgroundColor: "#517fa4",
    padding: 10,
  },
  iconStyles: {
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionStyles: {
    fontSize: 18,
  },
});

export default RequestDetailScreen;
