import { ScrollView, StyleSheet, Text, View } from "react-native";
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
          Your Farm Measurements
        </Text>
        <ScrollView
          style={{ marginBottom: normalize(85) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View>
            {FarmItem(1, "Joel Goni's Farm")}
            {FarmItem(2, "Joel Goni's Farm")}
            {FarmItem(3, "Joel Goni's Farm")}
            {FarmItem(4, "Joel Goni's Farm")}
            {FarmItem(5, "Joel Goni's Farm")}
            {FarmItem(6, "Joel Goni's Farm")}
            {FarmItem(7, "Joel Goni's Farm")}
            {FarmItem(8, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
            {FarmItem(9, "Joel Goni's Farm")}
          </View>
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

const FarmItem = (number, farmName) => {
  return (
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
        1.5 Hectares
      </Text>
    </View>
  );
};
export default FarmList;

const styles = StyleSheet.create({});
