import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeLayout from "../farmer/HomeLayout";
import { normalize } from "../../services";
import fonts from "../../constants/fonts";
import colors, { farmerColor } from "../../constants/colors";
import CustomButtons from "../../components/home/CustomButtons";

const Notification = (props) => {
  return (
    <>
      <HomeLayout
        {...props}
        showBackIcon={true}
        showLogo={true}
        settings={true}
        appbarColor="white"
        alternate={true}
      >
        <View style={{ marginTop: normalize(25) }}>
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        {/* if no notification  show this below View*/}
        {/* <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>emoji</Text>
          <Text>Pheew! Nothing needs your Attention</Text>
        </View> */}

        <ScrollView
          style={{ marginBottom: normalize(15), marginTop: normalize(10) }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
          <NotificationTile {...props} />
        </ScrollView>
      </HomeLayout>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Hello</Text>
        <Text style={styles.footerText}>Enjoying the FME App?</Text>
        <Text style={styles.footerText}>Rate Us or Give A Feedback.</Text>
        <CustomButtons
          {...props}
          style={styles.footerButton}
          title="Say Something"
          type="2"
        />
      </View>
    </>
  );
};

const NotificationTile = (props) => {
  return (
    <View
      style={{
        backgroundColor: farmerColor.backgroundColor,
        marginTop: normalize(10),
        padding: normalize(25),
        flexDirection: "row-reverse",
        borderRadius: normalize(10),
      }}
    >
      <Text
        style={{
          flex: 1,
          fontFamily: fonts.MontserratRegular,
        }}
      >
        11m ago
      </Text>
      <Text
        style={{
          flex: 4,
          fontFamily: fonts.MontserratSemiBold,
          color: farmerColor.tabBarIconColor,
        }}
      >
        You have a New Tractor Hire Request
      </Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontFamily: fonts.MontserratSemiBold,
    fontSize: normalize(20),
    color: farmerColor.tabBarIconColor,
  },
  footer: {
    backgroundColor: colors.lightGreen,
    width: "100%",
    paddingVertical: normalize(10),
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    textAlign: "center",
    fontFamily: fonts.MontserratMedium,
    fontSize: normalize(12),
    color: colors.darkGreen,
  },
  footerButton: {
    marginTop: normalize(15),
  },
});
