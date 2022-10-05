import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CONSTANT from "../../constants";
import HomeLayout from "./HomeLayout";
import { normalize } from "../../services";
import { farmerColor } from "../../constants/colors";
import font from "../../constants/fonts";
import Buttons from "../../components/home/Buttons.components";
import fonts from "../../constants/fonts";
const { ImageList } = CONSTANT;

const ServiceProviderList = () => {
  const searchIcon = (
    <Icon
      style={{ margin: normalize(10), color: farmerColor.tabBarIconColor }}
      name="search-outline"
      size={normalize(25)}
    />
  );
  const notifIcon = (
    <Icon
      style={{ margin: normalize(10), color: farmerColor.tabBarIconColor }}
      name="notifications-outline"
      size={normalize(25)}
    />
  );
  return (
    <HomeLayout showAppBar={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={ImageList[0]}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.iconContainer}>
            {iconMaker(notifIcon, () =>
              props.navigation.navigate("Notification")
            )}
            {iconMaker(searchIcon)}
          </View>
        </View>
        <View style={styles.banner}>
          <Image source={require("../../assets/app/FME-Img3.png")} />
          <Text
            style={{
              fontFamily: fonts.MontserratBold,
              fontSize: normalize(20),
              padding: normalize(15),
              color: farmerColor.tabBarIconColor,
              width: "80%",
            }}
          >
            Tractor Service Providers
          </Text>
        </View>
        <ScrollView
          style={{ flex: 1, marginBottom: normalize(90) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {ItemList()}
          {ItemList()}
          {ItemList()}
          {ItemList()}
          {ItemList()}
          {ItemList()}
          {ItemList()}
        </ScrollView>
      </View>
    </HomeLayout>
  );
};

const chevronRight = (
  <Icon
    style={{
      color: farmerColor.white,
    }}
    name="chevron-forward"
    size={normalize(25)}
  />
);

const ItemList = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: farmerColor.white,
        borderRadius: normalize(10),
        padding: normalize(20),
        marginVertical: normalize(7),
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: fonts.MontserratBold,
            color: farmerColor.tabBarIconColor,
            fontSize: normalize(15),
            marginVertical: normalize(5),
          }}
        >
          Maxion Tractors
        </Text>
        <Text style={{ fontFamily: fonts.MontserratMedium }}>
          #90,000/Hectare
        </Text>
      </View>
      <View
        style={{
          backgroundColor: farmerColor.lightGreen,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: normalize(10),
          borderRadius: normalize(10),
        }}
      >
        {chevronRight}
      </View>
    </View>
  );
};

const iconMaker = (icon, navigateTo) => {
  return (
    <TouchableOpacity
      style={styles.iconMaker}
      onPress={() => {
        navigateTo();
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default ServiceProviderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: farmerColor.backgroundColor,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: undefined,
    width: normalize(40),
    aspectRatio: 1,
    resizeMode: "center",
  },
  iconContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  iconMaker: {
    backgroundColor: farmerColor.backgroundColor,
    borderRadius: normalize(10),
    marginLeft: normalize(15),
  },
  banner: {
    marginVertical: normalize(15),
    backgroundColor: farmerColor.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: normalize(10),
    flexDirection: "row",
    padding: normalize(20),
    alignItems: "center",
  },
});
