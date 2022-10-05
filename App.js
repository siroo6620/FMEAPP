import { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";

import { NetworkProvider, ReduxNetworkProvider } from "react-native-offline";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useCachedResources from "./services/useCachedResources";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaView } from "react-native-safe-area-context";
import { toastConfig } from "./services/toastConfig";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";
import { store, persistor } from "./store";
import { injectStore } from "./requests";
import { normalize } from "./services";
import { Provider } from "react-redux";
import NavigationComponent from "./navigation";

injectStore(store);
SplashScreen.preventAutoHideAsync();

export default function App() {
  const isCachingComplete = useCachedResources();

  if (!isCachingComplete) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}>
          <ReduxNetworkProvider>
            <NetworkProvider> */}
        <NavigationComponent />
        {/* 
            </NetworkProvider>
          </ReduxNetworkProvider>
        </PersistGate> */}
      </Provider>
      <Toast config={toastConfig} visibilityTime={3000} position="top" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: normalize(40),
  },
});
