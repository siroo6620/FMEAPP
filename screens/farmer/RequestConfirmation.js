import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import HomeLayout from "./HomeLayout";
import fonts from "../../constants/fonts";
import { farmerColor } from "../../constants/colors";
import { normalize } from "../../services";

const RequestConfirmation = (props) => {
  return (
    <HomeLayout {...props} backIconAlt={true} settings={true}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: normalize(40),
        }}
      >
        <Text
          style={{
            fontFamily: fonts.MontserratSemiBold,
            width: "70%",
            textAlign: "center",
            color: farmerColor.tabBarIconColor,
            fontSize: normalize(16),
          }}
        >
          You Have Successfully Requested For a Tractor
        </Text>
        <Image source={require("../../assets/lottie/success-tick.json")} />
      </View>
    </HomeLayout>
  );
};

export default RequestConfirmation;

const styles = StyleSheet.create({});
