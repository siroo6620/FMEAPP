import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Success from "../screens/auth/Success";
import FarmerBottomTab from "./farmer/FarmerBottomTab";
import Notification from "../screens/home/Notification";
import Feedback from "../screens/farmer/Feedback";
import Settings from "../screens/farmer/Settings";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "FarmerBottomTab";

export default function AppComponent() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Stack.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="FarmerBottomTab" component={FarmerBottomTab} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="FeedBack" component={Feedback} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </>
  );
}
