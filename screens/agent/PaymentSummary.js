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
import Buttons from "../../components/home/Buttons.components";
import Icon from "react-native-vector-icons/Ionicons";

const PaymentSummary = (props) => {
  // Getting data from params
  const { data } = props.route.params;

  const walletIcon = (
    <Icon
      style={{
        color: farmerColor.tabBarIconColor,
        alignSelf: "center",
        marginBottom: normalize(10),
      }}
      name="wallet"
      size={normalize(25)}
    />
  );
  return (
    <HomeLayout showIcon={false} showNotif={true} backIconAlt={true} {...props}>
      <View style={{ marginTop: normalize(10) }}>
        <View>
          <Text
            style={{
              fontFamily: fonts.MontserratSemiBold,
              textAlign: "center",
              color: farmerColor.tabBarIconColor,
              fontSize: normalize(16),
              marginVertical: normalize(20),
              flexDirection: "row",
            }}
          >
            Make Payment
          </Text>
          {walletIcon}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginBottom: normalize(40),
          marginHorizontal: normalize(50),
        }}
      >
        {/* Top half Start */}
        <View
          style={{
            flex: 2,
            backgroundColor: farmerColor.white,
            borderTopStartRadius: normalize(10),
            borderTopEndRadius: normalize(10),
          }}
        >
          <View
            style={{
              backgroundColor: farmerColor.backgroundColor,
              height: 30,
              width: 30,
              borderTopRightRadius: 30,
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 2,
            }}
          />
          <View
            style={{
              backgroundColor: farmerColor.backgroundColor,
              height: 30,
              width: 30,
              borderTopLeftRadius: 30,
              position: "absolute",
              bottom: 0,
              right: 0,
              zIndex: 2,
            }}
          />
          {/* Line Horizontal */}
          <View
            style={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              left: 0,
              borderBottomColor: farmerColor.blackWithAlpha,
              borderBottomWidth: 2,
              borderStyle: "dashed",
            }}
          />
          {/* Content */}
          <View
            style={{
              marginHorizontal: normalize(10),
              marginVertical: normalize(10),
            }}
          >
            <Text
              style={{
                fontFamily: fonts.MontserratSemiBold,
                marginBottom: normalize(20),
                marginTop: normalize(5),
                color: farmerColor.tabBarIconColor,
                textAlign: "center",
                fontSize: normalize(16),
              }}
            >
              Agent Name
            </Text>
            <DetailsTile title="Farmer" value="Joel Goni" />
            <DetailsTile title="Farm Size" value="1.52 Hectares" />
            <DetailsTile title="Hectare Rate" value="NGN 90,000" />
            <DetailsTile title="Service" value="Tractor Hire" />
          </View>
        </View>
        {/* Top half ends */}

        {/* Bottom half start */}
        <View
          style={{
            flex: 0.8,
            backgroundColor: farmerColor.white,
            borderBottomStartRadius: normalize(10),
            borderBottomEndRadius: normalize(10),
          }}
        >
          <View
            style={{
              backgroundColor: farmerColor.backgroundColor,
              height: 30,
              width: 30,
              borderBottomRightRadius: 30,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <View
            style={{
              backgroundColor: farmerColor.backgroundColor,
              height: 30,
              width: 30,
              borderBottomLeftRadius: 30,
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
          <View
            style={{
              marginHorizontal: normalize(40),
              marginVertical: normalize(20),
            }}
          >
            <Text
              style={{
                fontFamily: fonts.MontserratMedium,
                color: farmerColor.tabBarIconSelectedColor,
                marginBottom: normalize(10),
              }}
            >
              You are to Pay{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: fonts.MontserratBold,
                  fontSize: normalize(18),
                  alignSelf: "center",
                  color: farmerColor.tabBarIconSelectedColor,
                }}
              >
                136,800.
              </Text>
              <Text
                style={{
                  fontFamily: fonts.MontserratBold,
                  fontSize: normalize(14),
                  alignSelf: "flex-end",
                  color: farmerColor.tabBarIconSelectedColor,
                }}
              >
                00{" "}
              </Text>
              <Text
                style={{
                  fontFamily: fonts.MontserratMedium,
                  fontSize: normalize(12),
                  alignSelf: "flex-end",
                  color: farmerColor.tabBarIconSelectedColor,
                }}
              >
                NGN
              </Text>
            </View>
          </View>
        </View>
        {/* Bottom half ends */}
        <View style={{ alignSelf: "center", marginTop: normalize(20) }}>
          <Buttons type="nonrounded" title="Pay Now" extendedPadding="normal" />
        </View>
      </View>
    </HomeLayout>
  );
};

const DetailsTile = ({ title, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: normalize(5),
      }}
    >
      <Text
        style={{
          fontFamily: fonts.MontserratMedium,
          marginBottom: normalize(20),
          marginTop: normalize(5),
          color: farmerColor.tabBarIconSelectedColor,
          textAlign: "left",
          fontSize: normalize(14),
          flex: 1,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: fonts.MontserratSemiBold,
          marginBottom: normalize(20),
          marginTop: normalize(5),
          color: farmerColor.tabBarIconColor,
          textAlign: "left",
          fontSize: normalize(15),
          flex: 1,
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({});
