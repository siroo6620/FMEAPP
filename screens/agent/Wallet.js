import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HomeLayout from "./HomeLayout";
import { normalize } from "../../services";
import fonts from "../../constants/fonts";
import colors, { farmerColor } from "../../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";

const Wallet = (props) => {
  const walletIcon = (
    <Icon
      style={{ color: farmerColor.tabBarIconColor }}
      name="wallet-outline"
      size={normalize(18)}
    />
  );
  return (
    <HomeLayout search={true} {...props} backIconAlt={true} settings={true}>
      <View
        style={{
          marginVertical: normalize(20),
        }}
      >
        <Text
          style={{
            fontFamily: fonts.MontserratSemiBold,
            color: farmerColor.tabBarIconColor,
            textAlign: "center",
          }}
        >
          Your Transactions
        </Text>

        <ScrollView
          style={{ marginBottom: normalize(90) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View >
            <View
              style={{
                marginTop: normalize(20),
                paddingBottom: normalize(5),
                borderBottomWidth: 1,
                borderBottomColor: farmerColor.tabBarIconColor,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {walletIcon}
              <Text
                style={{
                  fontFamily: fonts.PoppinsSemiBold,
                  marginLeft: normalize(20),
                  color: farmerColor.tabBarIconSelectedColor,
                  fontSize: normalize(12),
                }}
              >
                {" "}
                Monday, 22 Sep. 2022
              </Text>
            </View>
            <WalletTile
              name="Joel Goni"
              service="Tractor Hire"
              hectares="152 Hectares"
              amount="136,800 NGN"
            />
            <WalletTile
              name="Joel Goni"
              service="Tractor Hire"
              hectares="152 Hectares"
              amount="136,800 NGN"
            />
            <WalletTile
              name="Joel Goni"
              service="Tractor Hire"
              hectares="152 Hectares"
              amount="136,800 NGN"
            />
            <WalletTile
              name="Joel Goni"
              service="Tractor Hire"
              hectares="152 Hectares"
              amount="136,800 NGN"
            />
          </View>
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

export default Wallet;

const WalletTile = ({ name, service, hectares, amount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: normalize(20),
        paddingHorizontal: normalize(20),
        backgroundColor: farmerColor.white,
        marginVertical: normalize(7),
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: fonts.MontserratBold,
            fontSize: normalize(16),
            color: farmerColor.tabBarIconColor,
            margin: normalize(5),
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontFamily: fonts.MontserratSemiBold,
            fontSize: normalize(16),
            margin: normalize(5),
          }}
        >
          {service}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: fonts.MontserratSemiBold,
            fontSize: normalize(12),
            color: farmerColor.tabBarIconSelectedColor,
            margin: normalize(5),
            textAlign: "right",
          }}
        >
          {hectares}
        </Text>
        <Text
          style={{
            fontFamily: fonts.MontserratBold,
            fontSize: normalize(16),
            color: farmerColor.tabBarIconSelectedColor,
            margin: normalize(5),
          }}
        >
          {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
