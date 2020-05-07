import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Feather } from "@expo/vector-icons";

import LoadingAuthScreen from "./src/screens/LoadingAuthScreen";
import AccountScreen from "./src/screens/AccountScreen";
import RequestCreateScreen from "./src/screens/RequestCreateScreen";
import RequestDetailScreen from "./src/screens/RequestDetailScreen";
import RequestsListScreen from "./src/screens/RequestsListScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as NeedProvider } from "./src/context/NeedContext";
import { Provider as OrganizationProvider } from "./src/context/OrganizationContext";
import { setNavigator } from "./src/navigationRef";

const requestListFlow = createStackNavigator({
  RequestsList: RequestsListScreen,
  RequestDetail: RequestDetailScreen,
});

requestListFlow.navigationOptions = {
  title: "Needs",
  tabBarIcon: <Feather name="list" size={20} color="black" />,
};

const switchNavigator = createSwitchNavigator({
  LoadingAuth: LoadingAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    requestListFlow,
    RequestCreate: RequestCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <OrganizationProvider>
      <NeedProvider>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </NeedProvider>
    </OrganizationProvider>
  );
};
