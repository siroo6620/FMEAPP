import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "../../screens/agent/LandingPage";
import ServiceList from "../../screens/agent/ServiceList";
import ServiceProviderList from "../../screens/agent/ServiceProviderList";

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = "ServiceList";

const ServicesStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ServiceList" component={ServiceList} />
      <Stack.Screen
        name="ServiceListProvider"
        component={ServiceProviderList}
      />
    </Stack.Navigator>
  );
};

export default ServicesStack;

const styles = StyleSheet.create({});
