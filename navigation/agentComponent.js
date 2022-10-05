import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AgentBottomTab from "./agent/AgentBottomTab";
import Notification from "../screens/home/Notification";
import Feedback from "../screens/farmer/Feedback";
import Settings from "../screens/farmer/Settings";
import PaymentSummary from "../screens/agent/PaymentSummary";
import Wallet from "../screens/agent/Wallet";
import EditProfile from "../screens/agent/EditProfile";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "AgentBottomTab";

export default function AgentComponents() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Stack.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AgentBottomTab" component={AgentBottomTab} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="FeedBack" component={Feedback} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PaymentSummary" component={PaymentSummary} />
      </Stack.Navigator>
    </>
  );
}
