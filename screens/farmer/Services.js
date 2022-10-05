import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { normalize } from "../../services";
import AppBar from "../../components/home/AppBar";
import { farmerColor } from "../../constants/colors";
import fonts from "../../constants/fonts";
import CustomButtons from "../../components/home/CustomButtons";
import Buttons from "../../components/home/Buttons.components";

const buttonType = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  PROCESSING: "PROCESSING",
  CANCELLED: "CANCELLED",
};

const Services = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <AppBar {...props} showNotif={true} removeBack={true} />
      </View>
      <View style={styles.banner}>
        <Text
          style={{
            position: "absolute",
            right: 0,
            top: "30%",
            color: farmerColor.white,
            fontFamily: fonts.MontserratSemiBold,
            fontSize: normalize(20),
            width: "60%",
          }}
        >
          Service Request History
        </Text>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.imageBanner}
          source={require("../../assets/app/110.png")}
        />
      </View>
      <ScrollView
        style={{ flex: 1, marginBottom: normalize(85) }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          {/* For all events of a particular date  */}
          <View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: farmerColor.tabBarIconColor,
                borderBottomWidth: 1,
                paddingVertical: normalize(10),
                marginVertical: normalize(10),
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.MontserratSemiBold,
                  color: farmerColor.tabBarIconColor,
                  fontSize: normalize(14),
                }}
              >
                Monday,
              </Text>
              <Text
                style={{
                  marginLeft: normalize(6),
                  fontFamily: fonts.MontserratRegular,
                  color: farmerColor.tabBarIconColor,
                  fontSize: normalize(14),
                }}
              >
                26 Sep. 2022
              </Text>
              {/* For tile */}
            </View>
            {NotificationTile(
              require("../../assets/app/FME-Img3.png"),
              "Tractor Hire",
              buttonType.PENDING
            )}
            {NotificationTile(
              require("../../assets/app/FME-Img5.png"),
              "Buy Crop Seeds",
              buttonType.PROCESSING
            )}
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: farmerColor.tabBarIconColor,
                borderBottomWidth: 1,
                paddingVertical: normalize(10),
                marginVertical: normalize(10),
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.MontserratSemiBold,
                  color: farmerColor.tabBarIconColor,
                  fontSize: normalize(14),
                }}
              >
                Friday,
              </Text>
              <Text
                style={{
                  marginLeft: normalize(6),
                  fontFamily: fonts.MontserratRegular,
                  color: farmerColor.tabBarIconColor,
                  fontSize: normalize(14),
                }}
              >
                9 Sep. 2022
              </Text>
              {/* For tile */}
            </View>
            {NotificationTile(
              require("../../assets/app/FME-Img3.png"),
              "Tractor Hire",
              buttonType.APPROVED
            )}
            {NotificationTile(
              require("../../assets/app/FME-Img5.png"),
              "Buy Crop Seeds",
              buttonType.CANCELLED
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const NotificationTile = (image, title, btnType) => {
  let btnComponent;
  if (btnType === buttonType.PENDING) {
    btnComponent = <Buttons type="rounded" title="Pending" variant={1} />;
  } else if (btnType === buttonType.APPROVED) {
    btnComponent = <Buttons type="rounded" title="Approved" variant={3} />;
  } else if (btnType === buttonType.PROCESSING) {
    btnComponent = <Buttons type="rounded" title="Processing" variant={2} />;
  } else if (btnType === buttonType.CANCELLED) {
    btnComponent = <Buttons type="rounded" title="Cancelled" variant={4} />;
  }
  return (
    <View
      style={{
        marginVertical: normalize(6),
        backgroundColor: farmerColor.white,
        padding: normalize(12),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: normalize(10),
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.imageNotification} source={image} />
        <View style={{ paddingLeft: normalize(10) }}>
          <Text
            style={{
              fontFamily: fonts.MontserratBold,
              fontSize: normalize(16),
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      {btnComponent}
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: farmerColor.backgroundColor,
  },
  container: {
    marginTop: normalize(20),
    marginHorizontal: normalize(20),
  },
  banner: {
    width: "100%",
    height: normalize(100),
    backgroundColor: farmerColor.teal,
    marginVertical: normalize(10),
  },
  image: {
    backgroundColor: farmerColor.backgroundColor,
    marginHorizontal: normalize(20),
    width: normalize(100),
    borderRadius: normalize(8),
    borderWidth: 4,
    borderColor: farmerColor.white,
    elevation: 10,
    marginTop: -normalize(60),
  },
  imageNotification: {
    height: undefined,
    width: normalize(50),
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: normalize(10),
    padding: normalize(20),
  },
  imageBanner: {
    height: normalize(90),
    width: undefined,
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: normalize(10),
    padding: normalize(20),
  },
});
