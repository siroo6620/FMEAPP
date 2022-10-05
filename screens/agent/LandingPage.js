import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import HomeLayout from "./HomeLayout";
import imagesList from "../../constants/images";
import Icon from "react-native-vector-icons/Ionicons";
import { normalize } from "../../services";
import { farmerColor } from "../../constants/colors";
import fonts from "../../constants/fonts";

const LandingPage = (props) => {
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

  const globeIcon = (
    <Icon
      style={{ margin: normalize(10), color: farmerColor.white }}
      name="earth"
      size={normalize(25)}
    />
  );

  const clockIcon = (
    <Icon
      style={{
        marginRight: normalize(14),
        color: farmerColor.tabBarIconColor,
      }}
      name="time-outline"
      size={normalize(25)}
    />
  );

  return (
    <HomeLayout showAppBar={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={imagesList[0]}
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

        <View style={{ marginTop: normalize(20) }}>
          <View style={styles.greenTab}>
            {globeIcon}
            <Text
              style={{
                fontFamily: fonts.MontserratSemiBold,
                color: farmerColor.white,
                fontSize: normalize(17),
              }}
            >
              Garun Malaam,
            </Text>
            <Text
              style={{
                fontFamily: fonts.MontserratSemiBold,
                color: farmerColor.white,
                fontSize: normalize(17),
              }}
            >
              {" "}
              Kano
            </Text>
          </View>
        </View>
        <ScrollView
          style={{ flex: 1, marginBottom: normalize(85) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ marginTop: normalize(10) }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: farmerColor.tabBarIconSelectedColor,
                marginTop: normalize(30),
              }}
            >
              {clockIcon}
              <Text
                style={{
                  fontFamily: fonts.MontserratBold,
                  color: farmerColor.tabBarIconSelectedColor,
                  fontSize: normalize(14),
                }}
              >
                Monday,
              </Text>
              <Text
                style={{
                  fontFamily: fonts.MontserratSemiBold,
                  color: farmerColor.tabBarIconSelectedColor,
                  fontSize: normalize(14),
                }}
              >
                {" "}
                22 Sep. 2022
              </Text>
            </View>
            <View style={styles.cardContainer}>
              {CardTile(
                require("../../assets/app/FME-Img2.png"),
                "Tractor For Hire",
                "Joel Goni M.",
                "Garun Baba, Kano State",
                "+234 81 100 212 4556"
              )}
              {CardTile(
                require("../../assets/app/FME-Img3.png"),
                "Tractor For Hire",
                "Esther Ibrahim",
                "Garun Baba, Kano State",
                "+234 81 100 212 4556"
              )}
              {CardTile(
                require("../../assets/app/FME-Img4.png"),
                "Tractor For Hire",
                "Joel Goni M.",
                "Garun Baba, Kano State",
                "+234 81 100 212 4556"
              )}
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: farmerColor.tabBarIconSelectedColor,
                marginTop: normalize(30),
              }}
            >
              {clockIcon}
              <Text
                style={{
                  fontFamily: fonts.MontserratBold,
                  color: farmerColor.tabBarIconSelectedColor,
                  fontSize: normalize(14),
                }}
              >
                Monday,
              </Text>
              <Text
                style={{
                  fontFamily: fonts.MontserratSemiBold,
                  color: farmerColor.tabBarIconSelectedColor,
                  fontSize: normalize(14),
                }}
              >
                {" "}
                22 Sep. 2022
              </Text>
            </View>
            <View style={styles.cardContainer}>
              {CardTile(
                require("../../assets/app/FME-Img2.png"),
                "Tractor For Hire",
                "Joel Goni M.",
                "Garun Baba, Kano State",
                "+234 81 100 212 4556"
              )}
              {CardTile(
                require("../../assets/app/FME-Img3.png"),
                "Tractor For Hire",
                "Esther Ibrahim",
                "Garun Baba, Kano State",
                "+234 81 100 212 4556"
              )}
              {CardTile(
                require("../../assets/app/FME-Img4.png"),
                "Tractor For Hire",
                "Joel Goni M.",
                "Garun Baba, Kano State",
                "+234 81 100 212 4556"
              )}
            </View>
          </View>
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
const CardTile = (image, request, name, location, number) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.imageCard} source={image} />
        <View>
          <Text
            style={{
              fontFamily: fonts.MontserratBold,
              color: farmerColor.tabBarIconColor,
              marginVertical: normalize(5),
              fontSize: normalize(18),
            }}
          >
            {request}
          </Text>
          <Text
            style={{
              fontFamily: fonts.MontserratBold,
              color: farmerColor.tabBarIconColor,
              marginVertical: normalize(5),
              fontSize: normalize(18),
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: fonts.MontserratMedium,
              color: farmerColor.tabBarIconColor,
              marginVertical: normalize(5),
              fontSize: normalize(12),
              letterSpacing: 0.7,
            }}
          >
            {location}
          </Text>
          <Text
            style={{
              fontFamily: fonts.MontserratSemiBold,
              color: farmerColor.tabBarIconColor,
              marginVertical: normalize(5),
              fontSize: normalize(15),
            }}
          >
            {number}
          </Text>
        </View>
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

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  greenTab: {
    backgroundColor: farmerColor.agentLandingPageGreenTab,
    width: "100%",
    flexDirection: "row",
    borderRadius: normalize(10),
    alignItems: "center",
    paddingVertical: normalize(7),
    paddingHorizontal: normalize(10),
  },
  cardContainer: {
    marginTop: normalize(20),
  },

  card: {
    marginBottom: normalize(8),
    backgroundColor: farmerColor.white,
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10),
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: normalize(10),
  },
  imageCard: {
    height: undefined,
    width: normalize(40),
    aspectRatio: 1,
    resizeMode: "center",
    borderRadius: normalize(8),
    marginHorizontal: normalize(8),
  },
});
