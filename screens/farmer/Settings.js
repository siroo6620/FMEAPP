import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeLayout from "./HomeLayout";
import Icon from "react-native-vector-icons/Ionicons";
import { normalize } from "../../services";
import { farmerColor } from "../../constants/colors";
import fonts from "../../constants/fonts";

const Settings = (props) => {
  return (
    <HomeLayout
      showBackIcon={true}
      showLogo={true}
      settings={true}
      showIcon={false}
      appbarColor="white"
      alternate={true}
      {...props}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Settings</Text>

        <View>
          <Text style={styles.sectionHeaderText}>General</Text>
          <View>
            {settingsTab("person-outline", "Account")}
            {settingsTab("key-outline", "Security")}
            {settingsTab("notifications-outline", "Notifications")}
            {settingsTab("log-out-outline", "Log out")}
            {settingsTab("trash-outline", "Delete Account")}
          </View>
        </View>
        <View
          style={{
            marginVertical: normalize(25),
            borderBottomColor: farmerColor.tabBarIconColor,
            borderBottomWidth: 1,
          }}
        />

        <View>
          <Text style={styles.sectionHeaderText}>Feedback</Text>
          <View>
            {settingsTab("chatbubble-outline", "Contact us")}
            {settingsTab("star-outline", "Rate us")}
          </View>
        </View>
      </View>
    </HomeLayout>
  );
};

const MakeIcon = ({ name }) => {
  return (
    <Icon
      name={name}
      size={normalize(20)}
      style={{
        paddingRight: normalize(15),
        color: farmerColor.tabBarIconColor,
      }}
    />
  );
};

const settingsTab = (icon, text) => {
  return (
    <View style={styles.settingsTab}>
      <MakeIcon name={icon} />
      <Text style={styles.contentText}>{text}</Text>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  contentText: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: normalize(14),
    color: farmerColor.tabBarIconColor,
  },
  sectionHeaderText: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: normalize(16),
    color: farmerColor.tabBarIconColor,
  },
  headerText: {
    fontFamily: fonts.MontserratSemiBold,
    fontSize: normalize(20),
    color: farmerColor.tabBarIconColor,
    marginVertical: normalize(15),
    textAlign: "center",
  },
  settingsTab: {
    flexDirection: "row",
    backgroundColor: farmerColor.backgroundColor,
    padding: normalize(14),
    marginVertical: normalize(10),
    borderRadius: normalize(10),
    alignItems: "center",
  },
});
