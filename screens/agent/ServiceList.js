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
const { ImageList } = CONSTANT;

const ServiceList = (props) => {
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
        {/* Header starts */}
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
        {/* Header End */}
        {/* Banner Starts */}
        <View style={styles.banner}>
          <Text style={styles.bannerTextHeader}>Discover</Text>
          <View>
            <Image
              style={{
                width: "100%",
                borderRadius: normalize(10),
              }}
              source={ImageList[6]}
              resizeMode="stretch"
            />
            <View
              style={{
                position: "absolute",
                backgroundColor: farmerColor.blackWithAlphaExtra,
                width: "100%",
                height: "100%",
                borderRadius: normalize(10),
              }}
            />
            <View
              style={{
                position: "absolute",
                borderRadius: normalize(10),
              }}
            >
              <View
                style={{
                  marginHorizontal: normalize(20),
                  marginTop: normalize(10),
                  paddingTop: normalize(20),
                }}
              >
                <Text style={styles.bannerText}>Hire A</Text>
                <Text style={styles.bannerText}>Combine Harvester</Text>
                <Buttons
                  type="nonrounded"
                  title="Hire"
                  headerBtn={true}
                  extendedPadding="large"
                />
              </View>
            </View>
          </View>
        </View>
        {/* Banner Ends  */}
        <ScrollView
          style={{ flex: 1, marginBottom: normalize(85) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* Grid Layout Start */}
          <View style={styles.grid}>
            <Buttons
              type="nonrounded"
              title="Services"
              extendedPadding="normal"
            />
            {/* <Text style={styles.bannerTextHeader}>Other Services</Text> */}
            <Row>
              <Col>
                {CardTile(
                  "Hire a Tractor",
                  15,
                  require("../../assets/app/FME-Img2.png"),
                  props.navigation,
                  "Tractor"
                )}
              </Col>
              <Col>
                {CardTile(
                  "Hire a Plough",
                  7,
                  require("../../assets/app/FME-Img3.png"),
                  props.navigation,
                  "Plough"
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {CardTile(
                  "Hire a Tractor",
                  15,
                  require("../../assets/app/FME-Img4.png"),
                  props.navigation,
                  "Tractor"
                )}
              </Col>
              <Col>
                {CardTile(
                  "Hire a Plough",
                  7,
                  require("../../assets/app/FME-Img5.png"),
                  props.navigation,
                  "Plough"
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {CardTile(
                  "Hire a Tractor",
                  15,
                  require("../../assets/app/FME-Img6.png"),
                  props.navigation,
                  "Tractor"
                )}
              </Col>
              <Col>
                {CardTile(
                  "Hire a Plough",
                  7,
                  require("../../assets/app/FME-Img3.png"),
                  props.navigation,
                  "Plough"
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {CardTile(
                  "Hire a Planter",
                  3,
                  require("../../assets/app/FME-Img4.png"),
                  props.navigation,
                  "Planter"
                )}
              </Col>
              <Col>
                {CardTile(
                  "Get Your Seeds",
                  22,
                  require("../../assets/app/FME-Img5.png"),
                  props.navigation,
                  "Seeds"
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {CardTile(
                  "Hire a Tractor",
                  15,
                  require("../../assets/app/FME-Img4.png"),
                  props.navigation,
                  "Tractor"
                )}
              </Col>
              <Col>
                {CardTile(
                  "Hire a Plough",
                  15,
                  require("../../assets/app/FME-Img2.png"),
                  props.navigation,
                  "Plough"
                )}
              </Col>
            </Row>
          </View>
          {/* Grid ends */}
        </ScrollView>
      </View>
    </HomeLayout>
  );
};
const CardTile = (text, available, image, navigation, type) => {
  const data = { text, image, type };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ServiceListProvider", { data })}
    >
      <Image resizeMode="contain" style={styles.imageTile} source={image} />
      <Text style={styles.cardTileTextHeader}>{text}</Text>
      <Text style={styles.cardTileTextSub}>{available} Vendors Available</Text>
    </TouchableOpacity>
  );
};
const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};
const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
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

export default ServiceList;

const styles = StyleSheet.create({
  cardTileTextHeader: {
    fontFamily: font.MontserratBold,
    color: farmerColor.tabBarIconColor,
    fontSize: normalize(15),
  },
  cardTileTextSub: {
    fontFamily: font.MontserratBold,
    color: farmerColor.lightGreen,
    fontSize: normalize(10),
  },
  col: {
    flex: 1,
  },
  grid: {
    flexGrow: 1,
    marginHorizontal: "auto",
    marginTop: normalize(10),
    width: "100%",
  },
  row: {
    flexDirection: "row",
    marginVertical: normalize(8),
  },

  banner: { position: "relative" },
  bannerText: {
    fontFamily: font.MontserratBold,
    color: farmerColor.white,
    fontSize: normalize(20),
  },
  bannerTextHeader: {
    fontFamily: font.MontserratBold,
    color: farmerColor.tabBarIconColor,
    fontSize: normalize(30),
    marginVertical: normalize(10),
  },
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
  imageTile: {
    height: undefined,
    width: normalize(80),
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: normalize(10),
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
});
