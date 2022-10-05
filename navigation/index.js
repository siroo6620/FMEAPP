import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { authSelectors } from "../store/reducers/authSlice";
import AuthComponent from "./authComponent";
import { useSelector } from "react-redux";
import AppComponent from "./appComponent";
import useAuthenticateUser from "../services/useAuthenticateUser";
import AgentComponents from "./agentComponent";

export default function NavigationComponent() {
  const loggedIn = useSelector(authSelectors.selectLoggedIn);
  const isAuthenticatingComplete = useAuthenticateUser();

  if (!isAuthenticatingComplete) return null;

  return (
    <NavigationContainer>
      {true ? <AgentComponents /> : <AuthComponent />}
    </NavigationContainer>
  );
}
