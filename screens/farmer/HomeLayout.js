import { StyleSheet, View } from "react-native";
import React from "react";
import { normalize } from "../../services";
import AppBar from "../../components/home/AppBar";
import { farmerColor } from "../../constants/colors";

const HomeLayout = (props) => {
  const appBarColor =
    props.appbarColor === "white" ? styles.white : styles.green;
  return (
    <View style={[styles.container, appBarColor]}>
      {props.showAppBar === false ? "" : <AppBar {...props} />}
      {props.children}
    </View>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: farmerColor.backgroundColor,
    paddingTop: normalize(20),
    paddingHorizontal: normalize(20),
  },
  white: {
    backgroundColor: farmerColor.white,
  },
});
