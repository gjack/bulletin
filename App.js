import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import AccountScreen from "./src/screens/AccountScreen";
import RequestCreateScreen from "./src/screens/RequestCreateScreen";
import RequestDetailScreen from "./src/screens/RequestDetailScreen";
import RequestsListScreen from "./src/screens/RequestsListScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    requestListFlow: createStackNavigator({
      RequestsList: RequestsListScreen,
      RequestDetail: RequestDetailScreen,
    }),
    RequestCreate: RequestCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
