import { Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeLayout from "../../screens/farmer/HomeLayout";
import Profile from "../../screens/farmer/Profile";
import EditProfile from "../../screens/farmer/EditProfile";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "Profile";
const ProfileStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
