import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HomeLayout from "./HomeLayout";
import fonts from "../../constants/fonts";
import { normalize } from "../../services";
import { farmerColor } from "../../constants/colors";

const FarmList = (props) => {
  return (
    <HomeLayout showIcon={false} showNotif={true} backIconAlt={true} {...props}>
      <View style={{ marginTop: normalize(20), marginBottom: normalize(110) }}>
        <Text
          style={{
            fontFamily: fonts.MontserratSemiBold,
            textAlign: "center",
            color: farmerColor.tabBarIconColor,
            fontSize: normalize(16),
            marginVertical: normalize(20),
          }}
        >
          All Farm Measurements
        </Text>
        <ScrollView
          style={{ marginBottom: normalize(90) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View>
            {FarmItem(1, "Joel Goni's Farm", 1.5, props.navigation)}
            {FarmItem(2, "Abdullah Farms", 1, props.navigation)}
            {FarmItem(3, "Uchenna Farms Farm", 2, props.navigation)}
            {FarmItem(4, "Kwi Farm", 1.5, props.navigation)}
            {FarmItem(5, "Mayor Farm", 1.62, props.navigation)}
            {FarmItem(6, "Kayy Farm", 1.7, props.navigation)}
            {FarmItem(7, "chimdiya Farm", 1.4, props.navigation)}
            {FarmItem(8, "Patricia Farm", 5, props.navigation)}
            {FarmItem(9, "Babagana Farm", 25, props.navigation)}
          </View>
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

const FarmItem = (number, farmName, size, navigate) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigate.navigate("PaymentSummary", {
          data: { number, farmName, size },
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: farmerColor.white,
          paddingHorizontal: normalize(15),
          paddingVertical: normalize(15),
          borderRadius: normalize(10),
          marginVertical: normalize(5),
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginRight: normalize(20),
              fontFamily: fonts.MontserratMedium,
              color: farmerColor.tabBarIconColor,
            }}
          >
            {number}.
          </Text>
          <Text
            style={{
              fontFamily: fonts.MontserratMedium,
              color: farmerColor.tabBarIconColor,
            }}
          >
            {farmName}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: fonts.MontserratBold,
          }}
        >
          {size} Hectares
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default FarmList;

const styles = StyleSheet.create({});
